import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions:
    r"""AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions
    Information about the VPC peering connection options for the accepter or requester VPC.
    """
    
    allow_dns_resolution_from_remote_vpc: Optional[dict[str, Any]] = dataclasses.field(default=None)
    allow_egress_from_local_classic_link_to_remote_vpc: Optional[dict[str, Any]] = dataclasses.field(default=None)
    allow_egress_from_local_vpc_to_remote_classic_link: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo:
    r"""AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo
    Information about the accepter VPC. CIDR block information is only returned when describing an active VPC peering connection.
    """
    
    cidr_block: Optional[dict[str, Any]] = dataclasses.field(default=None)
    cidr_block_set: Optional[dict[str, Any]] = dataclasses.field(default=None)
    ipv6_cidr_block_set: Optional[dict[str, Any]] = dataclasses.field(default=None)
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    peering_options: Optional[AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions] = dataclasses.field(default=None)
    region: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vpc_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions:
    r"""AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions
    Information about the VPC peering connection options for the accepter or requester VPC.
    """
    
    allow_dns_resolution_from_remote_vpc: Optional[dict[str, Any]] = dataclasses.field(default=None)
    allow_egress_from_local_classic_link_to_remote_vpc: Optional[dict[str, Any]] = dataclasses.field(default=None)
    allow_egress_from_local_vpc_to_remote_classic_link: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo:
    r"""AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo
    Information about the requester VPC. CIDR block information is only returned when describing an active VPC peering connection.
    """
    
    cidr_block: Optional[dict[str, Any]] = dataclasses.field(default=None)
    cidr_block_set: Optional[dict[str, Any]] = dataclasses.field(default=None)
    ipv6_cidr_block_set: Optional[dict[str, Any]] = dataclasses.field(default=None)
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    peering_options: Optional[AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions] = dataclasses.field(default=None)
    region: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vpc_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus:
    r"""AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus
    The status of the VPC peering connection.
    """
    
    code: Optional[dict[str, Any]] = dataclasses.field(default=None)
    message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AcceptVpcPeeringConnectionResultVpcPeeringConnection:
    r"""AcceptVpcPeeringConnectionResultVpcPeeringConnection
    Information about the VPC peering connection.
    """
    
    accepter_vpc_info: Optional[AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo] = dataclasses.field(default=None)
    expiration_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    requester_vpc_info: Optional[AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo] = dataclasses.field(default=None)
    status: Optional[AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vpc_peering_connection_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AcceptVpcPeeringConnectionResult:
    vpc_peering_connection: Optional[AcceptVpcPeeringConnectionResultVpcPeeringConnection] = dataclasses.field(default=None)
    
