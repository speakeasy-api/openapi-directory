import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listjobsfilterterm as shared_listjobsfilterterm
from ..shared import listjobssortattributename_enum as shared_listjobssortattributename_enum
from ..shared import orderby_enum as shared_orderby_enum
from ..shared import listclassificationjobsresponse as shared_listclassificationjobsresponse


@dataclasses.dataclass
class ListClassificationJobsQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListClassificationJobsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ListClassificationJobsRequestBodyFilterCriteria:
    r"""ListClassificationJobsRequestBodyFilterCriteria
    Specifies criteria for filtering the results of a request for information about classification jobs.
    """
    
    excludes: Optional[list[shared_listjobsfilterterm.ListJobsFilterTerm]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludes') }})
    includes: Optional[list[shared_listjobsfilterterm.ListJobsFilterTerm]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includes') }})
    

@dataclass_json
@dataclasses.dataclass
class ListClassificationJobsRequestBodySortCriteria:
    r"""ListClassificationJobsRequestBodySortCriteria
    Specifies criteria for sorting the results of a request for information about classification jobs.
    """
    
    attribute_name: Optional[shared_listjobssortattributename_enum.ListJobsSortAttributeNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeName') }})
    order_by: Optional[shared_orderby_enum.OrderByEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderBy') }})
    

@dataclass_json
@dataclasses.dataclass
class ListClassificationJobsRequestBody:
    filter_criteria: Optional[ListClassificationJobsRequestBodyFilterCriteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterCriteria') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    sort_criteria: Optional[ListClassificationJobsRequestBodySortCriteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortCriteria') }})
    

@dataclasses.dataclass
class ListClassificationJobsRequest:
    headers: ListClassificationJobsHeaders = dataclasses.field()
    query_params: ListClassificationJobsQueryParams = dataclasses.field()
    request: ListClassificationJobsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListClassificationJobsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    list_classification_jobs_response: Optional[shared_listclassificationjobsresponse.ListClassificationJobsResponse] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
