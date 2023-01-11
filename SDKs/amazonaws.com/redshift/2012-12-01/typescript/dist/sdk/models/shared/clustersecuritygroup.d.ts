import { SpeakeasyBase } from "../../../internal/utils";
import { Ec2SecurityGroupList } from "./ec2securitygrouplist";
import { IpRangeList } from "./iprangelist";
import { TagList } from "./taglist";
/**
 * Describes a security group.
**/
export declare class ClusterSecurityGroup extends SpeakeasyBase {
    clusterSecurityGroupName?: string;
    description?: string;
    ec2SecurityGroups?: Ec2SecurityGroupList[];
    ipRanges?: IpRangeList[];
    tags?: TagList[];
}
