import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import classdetails as shared_classdetails
from ..shared import flaterrorresponse as shared_flaterrorresponse


@dataclasses.dataclass
class EnrollClassPathParams:
    enrollment_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enrollmentCode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnrollClassSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EnrollClassRequest:
    path_params: EnrollClassPathParams = dataclasses.field()
    security: EnrollClassSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EnrollClassResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    class_details: Optional[shared_classdetails.ClassDetails] = dataclasses.field(default=None)
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    
