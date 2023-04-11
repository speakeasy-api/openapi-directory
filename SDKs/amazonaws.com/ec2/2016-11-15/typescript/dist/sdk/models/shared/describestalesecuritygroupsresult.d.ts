import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Describes a security group and Amazon Web Services account ID pair.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
 */
export declare class DescribeStaleSecurityGroupsResultStaleSecurityGroupSetStaleIpPermissionsUserIdGroupPairs extends SpeakeasyBase {
    description?: string;
    groupId?: string;
    groupName?: string;
    peeringStatus?: string;
    userId?: string;
    vpcId?: string;
    vpcPeeringConnectionId?: string;
}
/**
 * Describes a stale rule in a security group.
 */
export declare class DescribeStaleSecurityGroupsResultStaleSecurityGroupSetStaleIpPermissions extends SpeakeasyBase {
    fromPort?: number;
    ipProtocol?: string;
    ipRanges?: string[];
    prefixListIds?: string[];
    toPort?: number;
    userIdGroupPairs?: DescribeStaleSecurityGroupsResultStaleSecurityGroupSetStaleIpPermissionsUserIdGroupPairs[];
}
/**
 * <p>Describes a security group and Amazon Web Services account ID pair.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
 */
export declare class DescribeStaleSecurityGroupsResultStaleSecurityGroupSetStaleIpPermissionsEgressUserIdGroupPairs extends SpeakeasyBase {
    description?: string;
    groupId?: string;
    groupName?: string;
    peeringStatus?: string;
    userId?: string;
    vpcId?: string;
    vpcPeeringConnectionId?: string;
}
/**
 * Describes a stale rule in a security group.
 */
export declare class DescribeStaleSecurityGroupsResultStaleSecurityGroupSetStaleIpPermissionsEgress extends SpeakeasyBase {
    fromPort?: number;
    ipProtocol?: string;
    ipRanges?: string[];
    prefixListIds?: string[];
    toPort?: number;
    userIdGroupPairs?: DescribeStaleSecurityGroupsResultStaleSecurityGroupSetStaleIpPermissionsEgressUserIdGroupPairs[];
}
/**
 * Describes a stale security group (a security group that contains stale rules).
 */
export declare class DescribeStaleSecurityGroupsResultStaleSecurityGroupSet extends SpeakeasyBase {
    description?: string;
    groupId?: string;
    groupName?: string;
    staleIpPermissions?: DescribeStaleSecurityGroupsResultStaleSecurityGroupSetStaleIpPermissions[];
    staleIpPermissionsEgress?: DescribeStaleSecurityGroupsResultStaleSecurityGroupSetStaleIpPermissionsEgress[];
    vpcId?: string;
}
/**
 * Success
 */
export declare class DescribeStaleSecurityGroupsResult extends SpeakeasyBase {
    nextToken?: string;
    staleSecurityGroupSet?: DescribeStaleSecurityGroupsResultStaleSecurityGroupSet[];
}
