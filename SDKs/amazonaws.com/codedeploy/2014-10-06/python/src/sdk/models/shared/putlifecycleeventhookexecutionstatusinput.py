import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lifecycleeventstatus_enum as shared_lifecycleeventstatus_enum


@dataclass_json
@dataclasses.dataclass
class PutLifecycleEventHookExecutionStatusInput:
    deployment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentId') }})
    lifecycle_event_hook_execution_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycleEventHookExecutionId') }})
    status: Optional[shared_lifecycleeventstatus_enum.LifecycleEventStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
