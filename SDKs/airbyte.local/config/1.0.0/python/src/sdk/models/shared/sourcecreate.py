import dataclasses
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SourceCreate:
    connection_configuration: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionConfiguration') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source_definition_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceDefinitionId') }})
    workspace_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspaceId') }})
    
