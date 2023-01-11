import dataclasses
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DestinationCoreConfig:
    connection_configuration: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionConfiguration') }})
    destination_definition_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationDefinitionId') }})
    
