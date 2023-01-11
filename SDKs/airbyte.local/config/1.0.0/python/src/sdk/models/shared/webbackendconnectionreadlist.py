import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webbackendconnectionread as shared_webbackendconnectionread


@dataclass_json
@dataclasses.dataclass
class WebBackendConnectionReadList:
    connections: list[shared_webbackendconnectionread.WebBackendConnectionRead] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    
