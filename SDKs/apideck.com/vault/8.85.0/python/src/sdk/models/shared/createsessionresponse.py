import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateSessionResponseData:
    session_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('session_token') }})
    session_uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('session_uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateSessionResponse:
    data: CreateSessionResponseData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_code') }})
    
