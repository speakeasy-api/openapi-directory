import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import deviceauthorizationcoderesponse as shared_deviceauthorizationcoderesponse
from ..shared import responseone as shared_responseone
from ..shared import responsetwo as shared_responsetwo
from ..shared import responsethree as shared_responsethree
from ..shared import responsefour as shared_responsefour
from ..shared import responsefive as shared_responsefive
from ..shared import responsesix as shared_responsesix


@dataclasses.dataclass
class GetDeviceCodeIDSecurity:
    oauthsecurity: shared_security.SchemeOauthsecurity = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GetDeviceCodeID401ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclasses.dataclass
class GetDeviceCodeIDRequest:
    security: GetDeviceCodeIDSecurity = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetDeviceCodeIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    device_authorization_code_response: Optional[shared_deviceauthorizationcoderesponse.DeviceAuthorizationCodeResponse] = dataclasses.field(default=None)
    get_device_code_id_400_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    get_device_code_id_401_application_json_object: Optional[GetDeviceCodeID401ApplicationJSON] = dataclasses.field(default=None)
    get_device_code_id_500_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
