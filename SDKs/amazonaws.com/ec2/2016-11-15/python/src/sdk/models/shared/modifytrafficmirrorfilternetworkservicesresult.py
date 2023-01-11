import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilter:
    r"""ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilter
    The Traffic Mirror filter that the network service is associated with.
    """
    
    description: Optional[dict[str, Any]] = dataclasses.field(default=None)
    egress_filter_rules: Optional[dict[str, Any]] = dataclasses.field(default=None)
    ingress_filter_rules: Optional[dict[str, Any]] = dataclasses.field(default=None)
    network_services: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    traffic_mirror_filter_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ModifyTrafficMirrorFilterNetworkServicesResult:
    traffic_mirror_filter: Optional[ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilter] = dataclasses.field(default=None)
    
