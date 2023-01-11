import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ModifyVpcPeeringConnectionOptionsResultAccepterPeeringConnectionOptions:
    r"""ModifyVpcPeeringConnectionOptionsResultAccepterPeeringConnectionOptions
    Information about the VPC peering connection options for the accepter VPC.
    """
    
    allow_dns_resolution_from_remote_vpc: Optional[dict[str, Any]] = dataclasses.field(default=None)
    allow_egress_from_local_classic_link_to_remote_vpc: Optional[dict[str, Any]] = dataclasses.field(default=None)
    allow_egress_from_local_vpc_to_remote_classic_link: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ModifyVpcPeeringConnectionOptionsResultRequesterPeeringConnectionOptions:
    r"""ModifyVpcPeeringConnectionOptionsResultRequesterPeeringConnectionOptions
    Information about the VPC peering connection options for the requester VPC.
    """
    
    allow_dns_resolution_from_remote_vpc: Optional[dict[str, Any]] = dataclasses.field(default=None)
    allow_egress_from_local_classic_link_to_remote_vpc: Optional[dict[str, Any]] = dataclasses.field(default=None)
    allow_egress_from_local_vpc_to_remote_classic_link: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ModifyVpcPeeringConnectionOptionsResult:
    accepter_peering_connection_options: Optional[ModifyVpcPeeringConnectionOptionsResultAccepterPeeringConnectionOptions] = dataclasses.field(default=None)
    requester_peering_connection_options: Optional[ModifyVpcPeeringConnectionOptionsResultRequesterPeeringConnectionOptions] = dataclasses.field(default=None)
    
