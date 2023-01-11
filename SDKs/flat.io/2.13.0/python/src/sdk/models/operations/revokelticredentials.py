import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flaterrorresponse as shared_flaterrorresponse


@dataclasses.dataclass
class RevokeLtiCredentialsPathParams:
    credentials: str = dataclasses.field(metadata={'path_param': { 'field_name': 'credentials', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RevokeLtiCredentialsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class RevokeLtiCredentialsRequest:
    path_params: RevokeLtiCredentialsPathParams = dataclasses.field()
    security: RevokeLtiCredentialsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RevokeLtiCredentialsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    
