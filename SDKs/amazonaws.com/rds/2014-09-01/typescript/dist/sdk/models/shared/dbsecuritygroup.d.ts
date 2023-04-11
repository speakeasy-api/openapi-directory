import { SpeakeasyBase } from "../../../internal/utils";
import { Ec2SecurityGroupList } from "./ec2securitygrouplist";
import { IPRangeList } from "./iprangelist";
export declare class DBSecurityGroup extends SpeakeasyBase {
    dbSecurityGroupDescription?: string;
    dbSecurityGroupName?: string;
    ec2SecurityGroups?: Ec2SecurityGroupList[];
    ipRanges?: IPRangeList[];
    ownerId?: string;
    vpcId?: string;
}
