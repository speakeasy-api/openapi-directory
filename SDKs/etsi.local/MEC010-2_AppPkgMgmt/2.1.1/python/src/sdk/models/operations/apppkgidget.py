import dataclasses
from typing import Optional
from ..shared import problemdetails as shared_problemdetails


@dataclasses.dataclass
class AppPkgIDGetPathParams:
    app_pkg_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'appPkgId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppPkgIDGetQueryParams:
    all_fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'all_fields', 'style': 'form', 'explode': True }})
    exclude_default: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude_default', 'style': 'form', 'explode': True }})
    exclude_fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude_fields', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AppPkgIDGetRequest:
    path_params: AppPkgIDGetPathParams = dataclasses.field()
    query_params: AppPkgIDGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AppPkgIDGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    app_d: Optional[str] = dataclasses.field(default=None)
    body: Optional[bytes] = dataclasses.field(default=None)
    problem_details: Optional[shared_problemdetails.ProblemDetails] = dataclasses.field(default=None)
    
