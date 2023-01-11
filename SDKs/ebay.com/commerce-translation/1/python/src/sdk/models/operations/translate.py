import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import translaterequest as shared_translaterequest
from ..shared import translateresponse as shared_translateresponse


@dataclasses.dataclass
class TranslateSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class Translate400ApplicationJSON:
    errors: Optional[list[shared_error.Error]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass_json
@dataclasses.dataclass
class Translate500ApplicationJSON:
    errors: Optional[list[shared_error.Error]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclasses.dataclass
class TranslateRequest:
    request: shared_translaterequest.TranslateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: TranslateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TranslateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    translate_response: Optional[shared_translateresponse.TranslateResponse] = dataclasses.field(default=None)
    translate_400_application_json_object: Optional[Translate400ApplicationJSON] = dataclasses.field(default=None)
    translate_500_application_json_object: Optional[Translate500ApplicationJSON] = dataclasses.field(default=None)
    
