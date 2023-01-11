import dataclasses
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SourceCoreConfig:
    connection_configuration: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionConfiguration') }})
    source_definition_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceDefinitionId') }})
    
