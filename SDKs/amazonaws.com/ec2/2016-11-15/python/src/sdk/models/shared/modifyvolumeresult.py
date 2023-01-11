import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ModifyVolumeResultVolumeModification:
    r"""ModifyVolumeResultVolumeModification
    Information about the volume modification.
    """
    
    end_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    modification_state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    original_iops: Optional[dict[str, Any]] = dataclasses.field(default=None)
    original_multi_attach_enabled: Optional[dict[str, Any]] = dataclasses.field(default=None)
    original_size: Optional[dict[str, Any]] = dataclasses.field(default=None)
    original_throughput: Optional[dict[str, Any]] = dataclasses.field(default=None)
    original_volume_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    progress: Optional[dict[str, Any]] = dataclasses.field(default=None)
    start_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status_message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    target_iops: Optional[dict[str, Any]] = dataclasses.field(default=None)
    target_multi_attach_enabled: Optional[dict[str, Any]] = dataclasses.field(default=None)
    target_size: Optional[dict[str, Any]] = dataclasses.field(default=None)
    target_throughput: Optional[dict[str, Any]] = dataclasses.field(default=None)
    target_volume_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    volume_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ModifyVolumeResult:
    volume_modification: Optional[ModifyVolumeResultVolumeModification] = dataclasses.field(default=None)
    
