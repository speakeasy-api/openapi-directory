import { SpeakeasyBase } from "../../../internal/utils";
/**
 * EC2 security group information for an RDS DB security group.
 */
export declare class AwsRdsDbSecurityGroupEc2SecurityGroup extends SpeakeasyBase {
    ec2SecurityGroupId?: string;
    ec2SecurityGroupName?: string;
    ec2SecurityGroupOwnerId?: string;
    status?: string;
}
