import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DisassociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState:
    r"""DisassociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState
    Information about the state of the CIDR block.
    """
    
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status_message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DisassociateVpcCidrBlockResultCidrBlockAssociation:
    r"""DisassociateVpcCidrBlockResultCidrBlockAssociation
    Information about the IPv4 CIDR block association.
    """
    
    association_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    cidr_block: Optional[dict[str, Any]] = dataclasses.field(default=None)
    cidr_block_state: Optional[DisassociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DisassociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState:
    r"""DisassociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState
    Information about the state of the CIDR block.
    """
    
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status_message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DisassociateVpcCidrBlockResultIpv6CidrBlockAssociation:
    r"""DisassociateVpcCidrBlockResultIpv6CidrBlockAssociation
    Information about the IPv6 CIDR block association.
    """
    
    association_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    ipv6_cidr_block: Optional[dict[str, Any]] = dataclasses.field(default=None)
    ipv6_cidr_block_state: Optional[DisassociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState] = dataclasses.field(default=None)
    ipv6_pool: Optional[dict[str, Any]] = dataclasses.field(default=None)
    network_border_group: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DisassociateVpcCidrBlockResult:
    cidr_block_association: Optional[DisassociateVpcCidrBlockResultCidrBlockAssociation] = dataclasses.field(default=None)
    ipv6_cidr_block_association: Optional[DisassociateVpcCidrBlockResultIpv6CidrBlockAssociation] = dataclasses.field(default=None)
    vpc_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
