import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import response7 as shared_response7
from ..shared import response8 as shared_response8
from ..shared import response9 as shared_response9


@dataclasses.dataclass
class VerifyOtpIDSecurity:
    oauthsecurity: shared_security.SchemeOauthsecurity = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class VerifyOtpID401ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclasses.dataclass
class VerifyOtpID500ApplicationJSON:
    error: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclasses.dataclass
class VerifyOtpIDRequest:
    security: VerifyOtpIDSecurity = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class VerifyOtpIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    demo_auth_verify_response: Optional[Any] = dataclasses.field(default=None)
    verify_otp_id_400_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    verify_otp_id_401_application_json_object: Optional[VerifyOtpID401ApplicationJSON] = dataclasses.field(default=None)
    verify_otp_id_500_application_json_object: Optional[VerifyOtpID500ApplicationJSON] = dataclasses.field(default=None)
    
