import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sort_order1_enum as shared_sort_order1_enum


@dataclasses.dataclass
class GetDriversQueryParams:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'active', 'style': 'form', 'explode': True }})
    created_at_dollar_gte_: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdAt[$gte]', 'style': 'form', 'explode': True }})
    created_at_dollar_lte_: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdAt[$lte]', 'style': 'form', 'explode': True }})
    include_group: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_group', 'style': 'form', 'explode': True }})
    include_organization: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_organization', 'style': 'form', 'explode': True }})
    include_tokens: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_tokens', 'style': 'form', 'explode': True }})
    paginate_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'paginate_enabled', 'style': 'form', 'explode': True }})
    paginate_limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'paginate_limit', 'style': 'form', 'explode': True }})
    paginate_page: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'paginate_page', 'style': 'form', 'explode': True }})
    sort_by: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    sort_order: Optional[shared_sort_order1_enum.SortOrder1Enum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_order', 'style': 'form', 'explode': True }})
    updated_at_dollar_gte_: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'updatedAt[$gte]', 'style': 'form', 'explode': True }})
    updated_at_dollar_lte_: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'updatedAt[$lte]', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetDrivers200ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ok: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    result: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class GetDriversRequest:
    query_params: GetDriversQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDriversResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_drivers_200_application_json_object: Optional[GetDrivers200ApplicationJSON] = dataclasses.field(default=None)
    
