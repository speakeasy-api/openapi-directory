import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ec2SecurityGroupList } from "./ec2securitygrouplist";
import { IpRangeList } from "./iprangelist";
import { TagList } from "./taglist";



// ClusterSecurityGroup
/** 
 * Describes a security group.
**/
export class ClusterSecurityGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clusterSecurityGroupName?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata({ elemType: Ec2SecurityGroupList })
  ec2SecurityGroups?: Ec2SecurityGroupList[];

  @SpeakeasyMetadata({ elemType: IpRangeList })
  ipRanges?: IpRangeList[];

  @SpeakeasyMetadata({ elemType: TagList })
  tags?: TagList[];
}
