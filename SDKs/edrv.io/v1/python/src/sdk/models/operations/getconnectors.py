import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import sort_order1_enum as shared_sort_order1_enum


@dataclasses.dataclass
class GetConnectorsQueryParams:
    created_at_dollar_gte_: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdAt[$gte]', 'style': 'form', 'explode': True }})
    created_at_dollar_lte_: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdAt[$lte]', 'style': 'form', 'explode': True }})
    include_evse: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_evse', 'style': 'form', 'explode': True }})
    include_organization: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_organization', 'style': 'form', 'explode': True }})
    include_rate: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_rate', 'style': 'form', 'explode': True }})
    paginate_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'paginate_enabled', 'style': 'form', 'explode': True }})
    paginate_limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'paginate_limit', 'style': 'form', 'explode': True }})
    paginate_page: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'paginate_page', 'style': 'form', 'explode': True }})
    sort_by: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    sort_order: Optional[shared_sort_order1_enum.SortOrder1Enum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_order', 'style': 'form', 'explode': True }})
    updated_at_dollar_gte_: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'updatedAt[$gte]', 'style': 'form', 'explode': True }})
    updated_at_dollar_lte_: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'updatedAt[$lte]', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetConnectorsRequest:
    query_params: GetConnectorsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConnectorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
