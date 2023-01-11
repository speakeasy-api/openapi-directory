import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState:
    r"""DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState
    Information about the state of the CIDR block.
    """
    
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status_message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociation:
    r"""DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociation
    Information about the IPv6 CIDR block association.
    """
    
    association_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    ipv6_cidr_block: Optional[dict[str, Any]] = dataclasses.field(default=None)
    ipv6_cidr_block_state: Optional[DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DisassociateSubnetCidrBlockResult:
    ipv6_cidr_block_association: Optional[DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociation] = dataclasses.field(default=None)
    subnet_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
