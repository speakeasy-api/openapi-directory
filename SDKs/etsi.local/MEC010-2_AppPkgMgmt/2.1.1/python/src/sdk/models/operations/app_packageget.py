import dataclasses
from typing import Optional
from ..shared import apppkginfo as shared_apppkginfo
from ..shared import problemdetails as shared_problemdetails


@dataclasses.dataclass
class AppPackageGetPathParams:
    app_pkg_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'appPkgId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppPackageGetRequest:
    path_params: AppPackageGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AppPackageGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    app_pkg_info: Optional[shared_apppkginfo.AppPkgInfo] = dataclasses.field(default=None)
    problem_details: Optional[shared_problemdetails.ProblemDetails] = dataclasses.field(default=None)
    
