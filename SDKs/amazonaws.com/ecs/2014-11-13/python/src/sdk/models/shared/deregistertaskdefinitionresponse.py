import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taskdefinition as shared_taskdefinition


@dataclass_json
@dataclasses.dataclass
class DeregisterTaskDefinitionResponse:
    task_definition: Optional[shared_taskdefinition.TaskDefinition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskDefinition') }})
    
