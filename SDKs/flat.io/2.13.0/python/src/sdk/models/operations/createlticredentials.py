import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import lticredentialscreation as shared_lticredentialscreation
from ..shared import flaterrorresponse as shared_flaterrorresponse
from ..shared import lticredentials as shared_lticredentials


@dataclasses.dataclass
class CreateLtiCredentialsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateLtiCredentialsRequest:
    request: shared_lticredentialscreation.LtiCredentialsCreation = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateLtiCredentialsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateLtiCredentialsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    lti_credentials: Optional[shared_lticredentials.LtiCredentials] = dataclasses.field(default=None)
    
