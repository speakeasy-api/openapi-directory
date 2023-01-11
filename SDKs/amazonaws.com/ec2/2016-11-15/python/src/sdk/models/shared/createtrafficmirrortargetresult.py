import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateTrafficMirrorTargetResultTrafficMirrorTarget:
    r"""CreateTrafficMirrorTargetResultTrafficMirrorTarget
    Information about the Traffic Mirror target.
    """
    
    description: Optional[dict[str, Any]] = dataclasses.field(default=None)
    network_interface_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    network_load_balancer_arn: Optional[dict[str, Any]] = dataclasses.field(default=None)
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    traffic_mirror_target_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateTrafficMirrorTargetResult:
    client_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    traffic_mirror_target: Optional[CreateTrafficMirrorTargetResultTrafficMirrorTarget] = dataclasses.field(default=None)
    
