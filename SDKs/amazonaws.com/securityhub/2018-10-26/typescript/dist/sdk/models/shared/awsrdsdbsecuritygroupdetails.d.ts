import { SpeakeasyBase } from "../../../internal/utils";
import { AwsRdsDbSecurityGroupEc2SecurityGroup } from "./awsrdsdbsecuritygroupec2securitygroup";
import { AwsRdsDbSecurityGroupIpRange } from "./awsrdsdbsecuritygroupiprange";
/**
 * Provides information about an Amazon RDS DB security group.
 */
export declare class AwsRdsDbSecurityGroupDetails extends SpeakeasyBase {
    dbSecurityGroupArn?: string;
    dbSecurityGroupDescription?: string;
    dbSecurityGroupName?: string;
    ec2SecurityGroups?: AwsRdsDbSecurityGroupEc2SecurityGroup[];
    ipRanges?: AwsRdsDbSecurityGroupIpRange[];
    ownerId?: string;
    vpcId?: string;
}
