import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listedserver as shared_listedserver


@dataclass_json
@dataclasses.dataclass
class ListServersResponse:
    servers: list[shared_listedserver.ListedServer] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Servers') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
