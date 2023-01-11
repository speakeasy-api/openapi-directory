import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import destinationdefinitionread as shared_destinationdefinitionread


@dataclass_json
@dataclasses.dataclass
class DestinationDefinitionReadList:
    destination_definitions: list[shared_destinationdefinitionread.DestinationDefinitionRead] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationDefinitions') }})
    
