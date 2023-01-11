import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import response10 as shared_response10
from ..shared import response11 as shared_response11
from ..shared import response12 as shared_response12


@dataclasses.dataclass
class SignUpIDSecurity:
    oauthsecurity: shared_security.SchemeOauthsecurity = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class SignUpID401ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclasses.dataclass
class SignUpID500ApplicationJSON:
    error: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclasses.dataclass
class SignUpIDRequest:
    security: SignUpIDSecurity = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class SignUpIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    demo_auth_response: Optional[Any] = dataclasses.field(default=None)
    sign_up_id_400_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    sign_up_id_401_application_json_object: Optional[SignUpID401ApplicationJSON] = dataclasses.field(default=None)
    sign_up_id_500_application_json_object: Optional[SignUpID500ApplicationJSON] = dataclasses.field(default=None)
    
