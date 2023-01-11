import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ec2SecurityGroupList } from "./ec2securitygrouplist";
import { IpRangeList } from "./iprangelist";



// DbSecurityGroup
/** 
 * <p>Contains the details for an Amazon RDS DB security group. </p> <p>This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action. </p>
**/
export class DbSecurityGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbSecurityGroupArn?: string;

  @SpeakeasyMetadata()
  dbSecurityGroupDescription?: string;

  @SpeakeasyMetadata()
  dbSecurityGroupName?: string;

  @SpeakeasyMetadata({ elemType: Ec2SecurityGroupList })
  ec2SecurityGroups?: Ec2SecurityGroupList[];

  @SpeakeasyMetadata({ elemType: IpRangeList })
  ipRanges?: IpRangeList[];

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata()
  vpcId?: string;
}
