import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accesstoken as shared_accesstoken
from ..shared import refreshtoken as shared_refreshtoken
from ..shared import accessresponse as shared_accessresponse


@dataclass_json
@dataclasses.dataclass
class GetaccesstokenIDRequestBody:
    get_access_token_using_authorization_code: Optional[shared_accesstoken.AccessToken] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Get access token using authorization code') }})
    get_access_token_using_device_code_and_otp: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Get access token using device code and OTP') }})
    get_access_token_using_refresh_token: Optional[shared_refreshtoken.RefreshToken] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Get access token using refresh token') }})
    

@dataclasses.dataclass
class GetaccesstokenIDRequest:
    request: GetaccesstokenIDRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetaccesstokenIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_response: Optional[shared_accessresponse.AccessResponse] = dataclasses.field(default=None)
    
