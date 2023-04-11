import { SpeakeasyBase } from "../../../internal/utils";
import { Ec2SecurityGroupList } from "./ec2securitygrouplist";
import { IPRangeList } from "./iprangelist";
/**
 * <p>Contains the details for an Amazon RDS DB security group.</p> <p>This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action.</p>
 */
export declare class DBSecurityGroup extends SpeakeasyBase {
    dbSecurityGroupArn?: string;
    dbSecurityGroupDescription?: string;
    dbSecurityGroupName?: string;
    ec2SecurityGroups?: Ec2SecurityGroupList[];
    ipRanges?: IPRangeList[];
    ownerId?: string;
    vpcId?: string;
}
