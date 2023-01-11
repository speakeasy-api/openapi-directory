import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DisassociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState
/** 
 * Information about the state of the CIDR block.
**/
export class DisassociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState extends SpeakeasyBase {
  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  statusMessage?: Record<string, any>;
}


// DisassociateVpcCidrBlockResultCidrBlockAssociation
/** 
 * Information about the IPv4 CIDR block association.
**/
export class DisassociateVpcCidrBlockResultCidrBlockAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationId?: Record<string, any>;

  @SpeakeasyMetadata()
  cidrBlock?: Record<string, any>;

  @SpeakeasyMetadata()
  cidrBlockState?: DisassociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState;
}


// DisassociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState
/** 
 * Information about the state of the CIDR block.
**/
export class DisassociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState extends SpeakeasyBase {
  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  statusMessage?: Record<string, any>;
}


// DisassociateVpcCidrBlockResultIpv6CidrBlockAssociation
/** 
 * Information about the IPv6 CIDR block association.
**/
export class DisassociateVpcCidrBlockResultIpv6CidrBlockAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationId?: Record<string, any>;

  @SpeakeasyMetadata()
  ipv6CidrBlock?: Record<string, any>;

  @SpeakeasyMetadata()
  ipv6CidrBlockState?: DisassociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState;

  @SpeakeasyMetadata()
  ipv6Pool?: Record<string, any>;

  @SpeakeasyMetadata()
  networkBorderGroup?: Record<string, any>;
}


export class DisassociateVpcCidrBlockResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidrBlockAssociation?: DisassociateVpcCidrBlockResultCidrBlockAssociation;

  @SpeakeasyMetadata()
  ipv6CidrBlockAssociation?: DisassociateVpcCidrBlockResultIpv6CidrBlockAssociation;

  @SpeakeasyMetadata()
  vpcId?: Record<string, any>;
}
