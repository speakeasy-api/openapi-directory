import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateNetworkAclResultNetworkAcl
/** 
 * Information about the network ACL.
**/
export class CreateNetworkAclResultNetworkAcl extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associations?: Record<string, any>;

  @SpeakeasyMetadata()
  entries?: Record<string, any>;

  @SpeakeasyMetadata()
  isDefault?: Record<string, any>;

  @SpeakeasyMetadata()
  networkAclId?: Record<string, any>;

  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  vpcId?: Record<string, any>;
}


export class CreateNetworkAclResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  networkAcl?: CreateNetworkAclResultNetworkAcl;
}
