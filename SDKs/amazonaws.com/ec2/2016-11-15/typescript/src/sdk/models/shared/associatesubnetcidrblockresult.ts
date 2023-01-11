import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState
/** 
 * Information about the state of the CIDR block.
**/
export class AssociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState extends SpeakeasyBase {
  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  statusMessage?: Record<string, any>;
}


// AssociateSubnetCidrBlockResultIpv6CidrBlockAssociation
/** 
 * Information about the IPv6 CIDR block association.
**/
export class AssociateSubnetCidrBlockResultIpv6CidrBlockAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationId?: Record<string, any>;

  @SpeakeasyMetadata()
  ipv6CidrBlock?: Record<string, any>;

  @SpeakeasyMetadata()
  ipv6CidrBlockState?: AssociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState;
}


export class AssociateSubnetCidrBlockResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ipv6CidrBlockAssociation?: AssociateSubnetCidrBlockResultIpv6CidrBlockAssociation;

  @SpeakeasyMetadata()
  subnetId?: Record<string, any>;
}
