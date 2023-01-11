import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UnlockconnectorRequestBody:
    chargestation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargestation') }})
    connector: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connector') }})
    

@dataclass_json
@dataclasses.dataclass
class Unlockconnector201ApplicationJSON:
    command: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ok: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    

@dataclasses.dataclass
class UnlockconnectorRequest:
    request: UnlockconnectorRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UnlockconnectorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    unlockconnector_201_application_json_object: Optional[Unlockconnector201ApplicationJSON] = dataclasses.field(default=None)
    
