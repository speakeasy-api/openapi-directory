import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import containeroverride as shared_containeroverride
from ..shared import ephemeralstorage as shared_ephemeralstorage
from ..shared import inferenceacceleratoroverride as shared_inferenceacceleratoroverride


@dataclass_json
@dataclasses.dataclass
class TaskOverride:
    r"""TaskOverride
    The overrides associated with a task.
    """
    
    container_overrides: Optional[list[shared_containeroverride.ContainerOverride]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerOverrides') }})
    cpu: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu') }})
    ephemeral_storage: Optional[shared_ephemeralstorage.EphemeralStorage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ephemeralStorage') }})
    execution_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionRoleArn') }})
    inference_accelerator_overrides: Optional[list[shared_inferenceacceleratoroverride.InferenceAcceleratorOverride]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inferenceAcceleratorOverrides') }})
    memory: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    task_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskRoleArn') }})
    
