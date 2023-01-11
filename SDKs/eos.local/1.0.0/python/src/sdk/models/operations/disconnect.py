import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DisconnectRequestBody:
    endpoint: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    

@dataclasses.dataclass
class DisconnectRequest:
    request: Optional[DisconnectRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DisconnectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    disconnect_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
