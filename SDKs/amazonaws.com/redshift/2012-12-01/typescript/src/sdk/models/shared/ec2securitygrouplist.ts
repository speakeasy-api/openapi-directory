import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";



// Ec2SecurityGroupList
/** 
 * Describes an Amazon EC2 security group.
**/
export class Ec2SecurityGroupList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ec2SecurityGroupName?: string;

  @SpeakeasyMetadata()
  ec2SecurityGroupOwnerId?: string;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata({ elemType: TagList })
  tags?: TagList[];
}
