import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateReplaceRootVolumeTaskResultReplaceRootVolumeTask:
    r"""CreateReplaceRootVolumeTaskResultReplaceRootVolumeTask
    Information about the root volume replacement task.
    """
    
    complete_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instance_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    replace_root_volume_task_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    start_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    task_state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateReplaceRootVolumeTaskResult:
    replace_root_volume_task: Optional[CreateReplaceRootVolumeTaskResultReplaceRootVolumeTask] = dataclasses.field(default=None)
    
