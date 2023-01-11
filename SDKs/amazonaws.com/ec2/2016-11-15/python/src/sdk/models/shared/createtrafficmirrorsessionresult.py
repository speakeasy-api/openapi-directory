import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateTrafficMirrorSessionResultTrafficMirrorSession:
    r"""CreateTrafficMirrorSessionResultTrafficMirrorSession
    Information about the Traffic Mirror session.
    """
    
    description: Optional[dict[str, Any]] = dataclasses.field(default=None)
    network_interface_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    packet_length: Optional[dict[str, Any]] = dataclasses.field(default=None)
    session_number: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    traffic_mirror_filter_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    traffic_mirror_session_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    traffic_mirror_target_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    virtual_network_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateTrafficMirrorSessionResult:
    client_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    traffic_mirror_session: Optional[CreateTrafficMirrorSessionResultTrafficMirrorSession] = dataclasses.field(default=None)
    
