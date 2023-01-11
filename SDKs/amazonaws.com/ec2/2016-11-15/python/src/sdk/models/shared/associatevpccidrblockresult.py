import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState:
    r"""AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState
    Information about the state of the CIDR block.
    """
    
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status_message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AssociateVpcCidrBlockResultCidrBlockAssociation:
    r"""AssociateVpcCidrBlockResultCidrBlockAssociation
    Information about the IPv4 CIDR block association.
    """
    
    association_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    cidr_block: Optional[dict[str, Any]] = dataclasses.field(default=None)
    cidr_block_state: Optional[AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AssociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState:
    r"""AssociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState
    Information about the state of the CIDR block.
    """
    
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status_message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AssociateVpcCidrBlockResultIpv6CidrBlockAssociation:
    r"""AssociateVpcCidrBlockResultIpv6CidrBlockAssociation
    Information about the IPv6 CIDR block association.
    """
    
    association_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    ipv6_cidr_block: Optional[dict[str, Any]] = dataclasses.field(default=None)
    ipv6_cidr_block_state: Optional[AssociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState] = dataclasses.field(default=None)
    ipv6_pool: Optional[dict[str, Any]] = dataclasses.field(default=None)
    network_border_group: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AssociateVpcCidrBlockResult:
    cidr_block_association: Optional[AssociateVpcCidrBlockResultCidrBlockAssociation] = dataclasses.field(default=None)
    ipv6_cidr_block_association: Optional[AssociateVpcCidrBlockResultIpv6CidrBlockAssociation] = dataclasses.field(default=None)
    vpc_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
