import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PushURIToAccountIDSecurity:
    oauthsecurity: shared_security.SchemeOauthsecurity = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class PushURIToAccountID400ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclasses.dataclass
class PushURIToAccountID401ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclasses.dataclass
class PushURIToAccountID404ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclasses.dataclass
class PushURIToAccountID500ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclasses.dataclass
class PushURIToAccountIDRequest:
    security: PushURIToAccountIDSecurity = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PushURIToAccountIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    push_uri_to_account_id_400_application_json_object: Optional[PushURIToAccountID400ApplicationJSON] = dataclasses.field(default=None)
    push_uri_to_account_id_401_application_json_object: Optional[PushURIToAccountID401ApplicationJSON] = dataclasses.field(default=None)
    push_uri_to_account_id_404_application_json_object: Optional[PushURIToAccountID404ApplicationJSON] = dataclasses.field(default=None)
    push_uri_to_account_id_500_application_json_object: Optional[PushURIToAccountID500ApplicationJSON] = dataclasses.field(default=None)
    sample: Optional[Any] = dataclasses.field(default=None)
    
