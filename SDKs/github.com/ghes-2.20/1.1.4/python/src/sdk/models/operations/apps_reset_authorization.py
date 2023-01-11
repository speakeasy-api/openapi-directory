import dataclasses
from typing import Optional
from ..shared import authorization as shared_authorization


@dataclasses.dataclass
class AppsResetAuthorizationPathParams:
    access_token: str = dataclasses.field(metadata={'path_param': { 'field_name': 'access_token', 'style': 'simple', 'explode': False }})
    client_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppsResetAuthorizationRequest:
    path_params: AppsResetAuthorizationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AppsResetAuthorizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    authorization: Optional[shared_authorization.Authorization] = dataclasses.field(default=None)
    
