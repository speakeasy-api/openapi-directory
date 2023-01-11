import dataclasses
from typing import Optional
from ..shared import problemdetails as shared_problemdetails


@dataclasses.dataclass
class AppPkgGetPathParams:
    app_pkg_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'appPkgId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppPkgGetRequest:
    path_params: AppPkgGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AppPkgGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_details: Optional[shared_problemdetails.ProblemDetails] = dataclasses.field(default=None)
    
