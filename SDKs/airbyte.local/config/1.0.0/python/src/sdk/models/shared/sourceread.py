import dataclasses
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SourceRead:
    connection_configuration: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionConfiguration') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source_definition_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceDefinitionId') }})
    source_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceId') }})
    source_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceName') }})
    workspace_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspaceId') }})
    
