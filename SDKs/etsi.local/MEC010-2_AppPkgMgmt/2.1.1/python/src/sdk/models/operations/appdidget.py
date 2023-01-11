import dataclasses
from typing import Optional
from ..shared import problemdetails as shared_problemdetails


@dataclasses.dataclass
class AppDIDGetPathParams:
    app_d_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'appDId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppDIDGetRequest:
    path_params: AppDIDGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AppDIDGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_details: Optional[shared_problemdetails.ProblemDetails] = dataclasses.field(default=None)
    
