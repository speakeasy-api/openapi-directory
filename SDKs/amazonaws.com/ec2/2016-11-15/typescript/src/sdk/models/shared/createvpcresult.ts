import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateVpcResultVpc
/** 
 * Information about the VPC.
**/
export class CreateVpcResultVpc extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidrBlock?: Record<string, any>;

  @SpeakeasyMetadata()
  cidrBlockAssociationSet?: Record<string, any>;

  @SpeakeasyMetadata()
  dhcpOptionsId?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceTenancy?: Record<string, any>;

  @SpeakeasyMetadata()
  ipv6CidrBlockAssociationSet?: Record<string, any>;

  @SpeakeasyMetadata()
  isDefault?: Record<string, any>;

  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  vpcId?: Record<string, any>;
}


export class CreateVpcResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  vpc?: CreateVpcResultVpc;
}
