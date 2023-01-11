import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import classdetails as shared_classdetails
from ..shared import flaterrorresponse as shared_flaterrorresponse


@dataclasses.dataclass
class ActivateClassPathParams:
    class_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'class', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActivateClassSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ActivateClassRequest:
    path_params: ActivateClassPathParams = dataclasses.field()
    security: ActivateClassSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ActivateClassResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    class_details: Optional[shared_classdetails.ClassDetails] = dataclasses.field(default=None)
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    
