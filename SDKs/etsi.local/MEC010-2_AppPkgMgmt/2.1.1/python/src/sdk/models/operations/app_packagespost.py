import dataclasses
from typing import Optional
from ..shared import createapppkg as shared_createapppkg
from ..shared import apppkginfo as shared_apppkginfo
from ..shared import problemdetails as shared_problemdetails


@dataclasses.dataclass
class AppPackagesPostRequest:
    request: shared_createapppkg.CreateAppPkg = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AppPackagesPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    app_pkg_infos: Optional[list[shared_apppkginfo.AppPkgInfo]] = dataclasses.field(default=None)
    problem_details: Optional[shared_problemdetails.ProblemDetails] = dataclasses.field(default=None)
    
