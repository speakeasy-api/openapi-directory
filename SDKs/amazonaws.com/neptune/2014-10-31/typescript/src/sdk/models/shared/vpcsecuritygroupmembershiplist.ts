import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VpcSecurityGroupMembershipList
/** 
 * This data type is used as a response element for queries on VPC security group membership.
**/
export class VpcSecurityGroupMembershipList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  vpcSecurityGroupId?: string;
}
