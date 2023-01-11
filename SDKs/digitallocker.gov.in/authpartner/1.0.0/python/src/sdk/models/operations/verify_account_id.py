import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import verifyaccountresponse as shared_verifyaccountresponse


@dataclasses.dataclass
class VerifyAccountIDSecurity:
    oauthsecurity: shared_security.SchemeOauthsecurity = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class VerifyAccountID400ApplicationJSON:
    error: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclasses.dataclass
class VerifyAccountID401ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclasses.dataclass
class VerifyAccountID500ApplicationJSON:
    error: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclasses.dataclass
class VerifyAccountIDRequest:
    security: VerifyAccountIDSecurity = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class VerifyAccountIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_account_id_400_application_json_object: Optional[VerifyAccountID400ApplicationJSON] = dataclasses.field(default=None)
    verify_account_id_401_application_json_object: Optional[VerifyAccountID401ApplicationJSON] = dataclasses.field(default=None)
    verify_account_id_500_application_json_object: Optional[VerifyAccountID500ApplicationJSON] = dataclasses.field(default=None)
    verify_account_response: Optional[shared_verifyaccountresponse.VerifyAccountResponse] = dataclasses.field(default=None)
    
