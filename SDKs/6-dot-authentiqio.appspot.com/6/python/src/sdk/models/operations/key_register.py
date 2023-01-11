import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class KeyRegister201ApplicationJSON:
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class KeyRegisterRequest:
    request: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/jwt' }})
    

@dataclasses.dataclass
class KeyRegisterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    key_register_201_application_json_object: Optional[KeyRegister201ApplicationJSON] = dataclasses.field(default=None)
    
