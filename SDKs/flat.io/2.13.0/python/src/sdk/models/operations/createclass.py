import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import classcreation as shared_classcreation
from ..shared import classdetails as shared_classdetails
from ..shared import flaterrorresponse as shared_flaterrorresponse


@dataclasses.dataclass
class CreateClassSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateClassRequest:
    request: shared_classcreation.ClassCreation = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateClassSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateClassResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    class_details: Optional[shared_classdetails.ClassDetails] = dataclasses.field(default=None)
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    
