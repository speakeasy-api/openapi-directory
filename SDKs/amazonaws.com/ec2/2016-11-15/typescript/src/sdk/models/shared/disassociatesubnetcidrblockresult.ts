import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState
/** 
 * Information about the state of the CIDR block.
**/
export class DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState extends SpeakeasyBase {
  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  statusMessage?: Record<string, any>;
}


// DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociation
/** 
 * Information about the IPv6 CIDR block association.
**/
export class DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationId?: Record<string, any>;

  @SpeakeasyMetadata()
  ipv6CidrBlock?: Record<string, any>;

  @SpeakeasyMetadata()
  ipv6CidrBlockState?: DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState;
}


export class DisassociateSubnetCidrBlockResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ipv6CidrBlockAssociation?: DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociation;

  @SpeakeasyMetadata()
  subnetId?: Record<string, any>;
}
