import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import destinationread as shared_destinationread


@dataclass_json
@dataclasses.dataclass
class DestinationReadList:
    destinations: list[shared_destinationread.DestinationRead] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinations') }})
    
