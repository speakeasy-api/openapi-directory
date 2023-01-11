import dataclasses
from typing import Optional
from ..shared import apppkginfomodifications as shared_apppkginfomodifications
from ..shared import problemdetails as shared_problemdetails


@dataclasses.dataclass
class AppPackagePatchPathParams:
    app_pkg_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'appPkgId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppPackagePatchRequest:
    path_params: AppPackagePatchPathParams = dataclasses.field()
    request: shared_apppkginfomodifications.AppPkgInfoModifications = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AppPackagePatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    app_pkg_info_modifications: Optional[shared_apppkginfomodifications.AppPkgInfoModifications] = dataclasses.field(default=None)
    problem_details: Optional[shared_problemdetails.ProblemDetails] = dataclasses.field(default=None)
    
