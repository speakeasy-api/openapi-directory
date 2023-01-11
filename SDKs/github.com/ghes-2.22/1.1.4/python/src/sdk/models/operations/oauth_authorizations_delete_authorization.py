import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error


@dataclasses.dataclass
class OauthAuthorizationsDeleteAuthorizationPathParams:
    authorization_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'authorization_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OauthAuthorizationsDeleteAuthorizationRequest:
    path_params: OauthAuthorizationsDeleteAuthorizationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class OauthAuthorizationsDeleteAuthorizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    
