import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class NodeGroupConfiguration:
    r"""NodeGroupConfiguration
    Node group (shard) configuration options. Each node group (shard) configuration has the following: <code>Slots</code>, <code>PrimaryAvailabilityZone</code>, <code>ReplicaAvailabilityZones</code>, <code>ReplicaCount</code>.
    """
    
    node_group_id: Optional[str] = dataclasses.field(default=None)
    primary_availability_zone: Optional[str] = dataclasses.field(default=None)
    primary_outpost_arn: Optional[str] = dataclasses.field(default=None)
    replica_availability_zones: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    replica_count: Optional[int] = dataclasses.field(default=None)
    replica_outpost_arns: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    slots: Optional[str] = dataclasses.field(default=None)
    
