import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateTrafficMirrorFilterResultTrafficMirrorFilter:
    r"""CreateTrafficMirrorFilterResultTrafficMirrorFilter
    Information about the Traffic Mirror filter.
    """
    
    description: Optional[dict[str, Any]] = dataclasses.field(default=None)
    egress_filter_rules: Optional[dict[str, Any]] = dataclasses.field(default=None)
    ingress_filter_rules: Optional[dict[str, Any]] = dataclasses.field(default=None)
    network_services: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    traffic_mirror_filter_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateTrafficMirrorFilterResult:
    client_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    traffic_mirror_filter: Optional[CreateTrafficMirrorFilterResultTrafficMirrorFilter] = dataclasses.field(default=None)
    
