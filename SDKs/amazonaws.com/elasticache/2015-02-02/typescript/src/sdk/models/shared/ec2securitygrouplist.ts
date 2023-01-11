import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Ec2SecurityGroupList
/** 
 * Provides ownership and status information for an Amazon EC2 security group.
**/
export class Ec2SecurityGroupList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ec2SecurityGroupName?: string;

  @SpeakeasyMetadata()
  ec2SecurityGroupOwnerId?: string;

  @SpeakeasyMetadata()
  status?: string;
}
