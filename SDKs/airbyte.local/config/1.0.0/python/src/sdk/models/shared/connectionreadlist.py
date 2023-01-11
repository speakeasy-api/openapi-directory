import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectionread as shared_connectionread


@dataclass_json
@dataclasses.dataclass
class ConnectionReadList:
    connections: list[shared_connectionread.ConnectionRead] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    
