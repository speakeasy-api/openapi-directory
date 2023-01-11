import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ec2SecurityGroupList } from "./ec2securitygrouplist";
import { IpRangeList } from "./iprangelist";



export class DbSecurityGroup extends SpeakeasyBase {
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
