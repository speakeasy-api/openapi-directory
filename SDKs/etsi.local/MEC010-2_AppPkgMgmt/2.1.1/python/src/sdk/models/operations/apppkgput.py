import dataclasses
from typing import Optional
from ..shared import problemdetails as shared_problemdetails


@dataclasses.dataclass
class AppPkgPutPathParams:
    app_pkg_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'appPkgId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppPkgPutRequest:
    path_params: AppPkgPutPathParams = dataclasses.field()
    request: Optional[bytes] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/zip' }})
    

@dataclasses.dataclass
class AppPkgPutResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_details: Optional[shared_problemdetails.ProblemDetails] = dataclasses.field(default=None)
    
