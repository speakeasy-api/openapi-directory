import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sortorder_enum as shared_sortorder_enum
from ..shared import filter as shared_filter
from ..shared import listentitiesresponse as shared_listentitiesresponse


@dataclasses.dataclass
class ListEntitiesQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListEntitiesHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ListEntitiesRequestBodySort:
    r"""ListEntitiesRequestBodySort
    An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>.
    """
    
    sort_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SortBy') }})
    sort_order: Optional[shared_sortorder_enum.SortOrderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SortOrder') }})
    

@dataclass_json
@dataclasses.dataclass
class ListEntitiesRequestBody:
    catalog: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Catalog') }})
    entity_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntityType') }})
    filter_list: Optional[list[shared_filter.Filter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilterList') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    sort: Optional[ListEntitiesRequestBodySort] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sort') }})
    

@dataclasses.dataclass
class ListEntitiesRequest:
    headers: ListEntitiesHeaders = dataclasses.field()
    query_params: ListEntitiesQueryParams = dataclasses.field()
    request: ListEntitiesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListEntitiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    list_entities_response: Optional[shared_listentitiesresponse.ListEntitiesResponse] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
