import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState
/** 
 * Information about the state of the CIDR block.
**/
export class AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState extends SpeakeasyBase {
  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  statusMessage?: Record<string, any>;
}


// AssociateVpcCidrBlockResultCidrBlockAssociation
/** 
 * Information about the IPv4 CIDR block association.
**/
export class AssociateVpcCidrBlockResultCidrBlockAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationId?: Record<string, any>;

  @SpeakeasyMetadata()
  cidrBlock?: Record<string, any>;

  @SpeakeasyMetadata()
  cidrBlockState?: AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState;
}


// AssociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState
/** 
 * Information about the state of the CIDR block.
**/
export class AssociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState extends SpeakeasyBase {
  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  statusMessage?: Record<string, any>;
}


// AssociateVpcCidrBlockResultIpv6CidrBlockAssociation
/** 
 * Information about the IPv6 CIDR block association.
**/
export class AssociateVpcCidrBlockResultIpv6CidrBlockAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationId?: Record<string, any>;

  @SpeakeasyMetadata()
  ipv6CidrBlock?: Record<string, any>;

  @SpeakeasyMetadata()
  ipv6CidrBlockState?: AssociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState;

  @SpeakeasyMetadata()
  ipv6Pool?: Record<string, any>;

  @SpeakeasyMetadata()
  networkBorderGroup?: Record<string, any>;
}


export class AssociateVpcCidrBlockResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidrBlockAssociation?: AssociateVpcCidrBlockResultCidrBlockAssociation;

  @SpeakeasyMetadata()
  ipv6CidrBlockAssociation?: AssociateVpcCidrBlockResultIpv6CidrBlockAssociation;

  @SpeakeasyMetadata()
  vpcId?: Record<string, any>;
}
