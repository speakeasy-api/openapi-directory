import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeletechargingscheduleRequestBody:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class Deletechargingschedule201ApplicationJSON:
    command: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ok: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    

@dataclasses.dataclass
class DeletechargingscheduleRequest:
    request: DeletechargingscheduleRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeletechargingscheduleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    deletechargingschedule_201_application_json_object: Optional[Deletechargingschedule201ApplicationJSON] = dataclasses.field(default=None)
    
