import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an IPv4 range.
 */
export declare class DescribeSecurityGroupsResultSecurityGroupsIpPermissionsIpRanges extends SpeakeasyBase {
    cidrIp?: string;
    description?: string;
}
/**
 * [EC2-VPC only] Describes an IPv6 range.
 */
export declare class DescribeSecurityGroupsResultSecurityGroupsIpPermissionsIpv6Ranges extends SpeakeasyBase {
    cidrIpv6?: string;
    description?: string;
}
/**
 * Describes a prefix list ID.
 */
export declare class DescribeSecurityGroupsResultSecurityGroupsIpPermissionsPrefixListIds extends SpeakeasyBase {
    description?: string;
    prefixListId?: string;
}
/**
 * <p>Describes a security group and Amazon Web Services account ID pair.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
 */
export declare class DescribeSecurityGroupsResultSecurityGroupsIpPermissionsUserIdGroupPairs extends SpeakeasyBase {
    description?: string;
    groupId?: string;
    groupName?: string;
    peeringStatus?: string;
    userId?: string;
    vpcId?: string;
    vpcPeeringConnectionId?: string;
}
/**
 * Describes a set of permissions for a security group rule.
 */
export declare class DescribeSecurityGroupsResultSecurityGroupsIpPermissions extends SpeakeasyBase {
    fromPort?: number;
    ipProtocol?: string;
    ipRanges?: DescribeSecurityGroupsResultSecurityGroupsIpPermissionsIpRanges[];
    ipv6Ranges?: DescribeSecurityGroupsResultSecurityGroupsIpPermissionsIpv6Ranges[];
    prefixListIds?: DescribeSecurityGroupsResultSecurityGroupsIpPermissionsPrefixListIds[];
    toPort?: number;
    userIdGroupPairs?: DescribeSecurityGroupsResultSecurityGroupsIpPermissionsUserIdGroupPairs[];
}
/**
 * Describes an IPv4 range.
 */
export declare class DescribeSecurityGroupsResultSecurityGroupsIpPermissionsEgressIpRanges extends SpeakeasyBase {
    cidrIp?: string;
    description?: string;
}
/**
 * [EC2-VPC only] Describes an IPv6 range.
 */
export declare class DescribeSecurityGroupsResultSecurityGroupsIpPermissionsEgressIpv6Ranges extends SpeakeasyBase {
    cidrIpv6?: string;
    description?: string;
}
/**
 * Describes a prefix list ID.
 */
export declare class DescribeSecurityGroupsResultSecurityGroupsIpPermissionsEgressPrefixListIds extends SpeakeasyBase {
    description?: string;
    prefixListId?: string;
}
/**
 * <p>Describes a security group and Amazon Web Services account ID pair.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
 */
export declare class DescribeSecurityGroupsResultSecurityGroupsIpPermissionsEgressUserIdGroupPairs extends SpeakeasyBase {
    description?: string;
    groupId?: string;
    groupName?: string;
    peeringStatus?: string;
    userId?: string;
    vpcId?: string;
    vpcPeeringConnectionId?: string;
}
/**
 * Describes a set of permissions for a security group rule.
 */
export declare class DescribeSecurityGroupsResultSecurityGroupsIpPermissionsEgress extends SpeakeasyBase {
    fromPort?: number;
    ipProtocol?: string;
    ipRanges?: DescribeSecurityGroupsResultSecurityGroupsIpPermissionsEgressIpRanges[];
    ipv6Ranges?: DescribeSecurityGroupsResultSecurityGroupsIpPermissionsEgressIpv6Ranges[];
    prefixListIds?: DescribeSecurityGroupsResultSecurityGroupsIpPermissionsEgressPrefixListIds[];
    toPort?: number;
    userIdGroupPairs?: DescribeSecurityGroupsResultSecurityGroupsIpPermissionsEgressUserIdGroupPairs[];
}
/**
 * Describes a tag.
 */
export declare class DescribeSecurityGroupsResultSecurityGroupsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a security group.
 */
export declare class DescribeSecurityGroupsResultSecurityGroups extends SpeakeasyBase {
    description?: string;
    groupId?: string;
    groupName?: string;
    ipPermissions?: DescribeSecurityGroupsResultSecurityGroupsIpPermissions[];
    ipPermissionsEgress?: DescribeSecurityGroupsResultSecurityGroupsIpPermissionsEgress[];
    ownerId?: string;
    tags?: DescribeSecurityGroupsResultSecurityGroupsTags[];
    vpcId?: string;
}
/**
 * Success
 */
export declare class DescribeSecurityGroupsResult extends SpeakeasyBase {
    nextToken?: string;
    securityGroups?: DescribeSecurityGroupsResultSecurityGroups[];
}
