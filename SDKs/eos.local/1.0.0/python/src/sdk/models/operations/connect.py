import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ConnectRequestBody:
    endpoint: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    

@dataclasses.dataclass
class ConnectRequest:
    request: Optional[ConnectRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ConnectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    connect_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
