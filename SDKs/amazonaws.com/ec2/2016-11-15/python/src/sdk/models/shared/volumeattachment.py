import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class VolumeAttachment:
    r"""VolumeAttachment
    Describes volume attachment details.
    """
    
    attach_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    delete_on_termination: Optional[dict[str, Any]] = dataclasses.field(default=None)
    device: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instance_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    volume_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
