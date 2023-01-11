import { SpeakeasyBase } from "../../../internal/utils";
import { Ec2SecurityGroupList } from "./ec2securitygrouplist";
import { IpRangeList } from "./iprangelist";
export declare class DbSecurityGroups extends SpeakeasyBase {
    dbSecurityGroupDescription?: string;
    dbSecurityGroupName?: string;
    ec2SecurityGroups?: Ec2SecurityGroupList[];
    ipRanges?: IpRangeList[];
    ownerId?: string;
    vpcId?: string;
}
