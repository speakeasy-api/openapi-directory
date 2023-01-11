import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VpcSecurityGroupMembershipList
/** 
 * Used as a response element for queries on virtual private cloud (VPC) security group membership.
**/
export class VpcSecurityGroupMembershipList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  vpcSecurityGroupId?: string;
}
