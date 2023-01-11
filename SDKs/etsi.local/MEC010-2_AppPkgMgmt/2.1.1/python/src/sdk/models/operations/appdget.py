import dataclasses
from typing import Optional
from ..shared import problemdetails as shared_problemdetails


@dataclasses.dataclass
class AppDgetPathParams:
    app_d_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'appDId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppDgetQueryParams:
    all_fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'all_fields', 'style': 'form', 'explode': True }})
    exclude_default: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude_default', 'style': 'form', 'explode': True }})
    exclude_fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude_fields', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AppDgetRequest:
    path_params: AppDgetPathParams = dataclasses.field()
    query_params: AppDgetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AppDgetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    app_d: Optional[str] = dataclasses.field(default=None)
    body: Optional[bytes] = dataclasses.field(default=None)
    problem_details: Optional[shared_problemdetails.ProblemDetails] = dataclasses.field(default=None)
    
