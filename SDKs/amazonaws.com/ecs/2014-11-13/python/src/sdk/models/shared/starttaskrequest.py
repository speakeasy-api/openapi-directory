import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import networkconfiguration as shared_networkconfiguration
from ..shared import taskoverride as shared_taskoverride
from ..shared import propagatetags_enum as shared_propagatetags_enum
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class StartTaskRequest:
    container_instances: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerInstances') }})
    task_definition: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskDefinition') }})
    cluster: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    enable_ecs_managed_tags: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableECSManagedTags') }})
    enable_execute_command: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableExecuteCommand') }})
    group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    network_configuration: Optional[shared_networkconfiguration.NetworkConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfiguration') }})
    overrides: Optional[shared_taskoverride.TaskOverride] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrides') }})
    propagate_tags: Optional[shared_propagatetags_enum.PropagateTagsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propagateTags') }})
    reference_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceId') }})
    started_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedBy') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
