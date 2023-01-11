import dataclasses
from typing import Optional
from ..shared import problemdetails as shared_problemdetails


@dataclasses.dataclass
class AppPackageDeletePathParams:
    app_pkg_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'appPkgId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppPackageDeleteRequest:
    path_params: AppPackageDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class AppPackageDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_details: Optional[shared_problemdetails.ProblemDetails] = dataclasses.field(default=None)
    
