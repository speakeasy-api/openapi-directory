import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CancelreservationRequestBody:
    reservation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservation') }})
    

@dataclass_json
@dataclasses.dataclass
class Cancelreservation201ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ok: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    result: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class CancelreservationRequest:
    request: CancelreservationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CancelreservationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cancelreservation_201_application_json_object: Optional[Cancelreservation201ApplicationJSON] = dataclasses.field(default=None)
    
