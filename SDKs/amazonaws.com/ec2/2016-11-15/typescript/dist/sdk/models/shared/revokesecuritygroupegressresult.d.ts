import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an IPv4 range.
 */
export declare class RevokeSecurityGroupEgressResultUnknownIpPermissionsIpRanges extends SpeakeasyBase {
    cidrIp?: string;
    description?: string;
}
/**
 * [EC2-VPC only] Describes an IPv6 range.
 */
export declare class RevokeSecurityGroupEgressResultUnknownIpPermissionsIpv6Ranges extends SpeakeasyBase {
    cidrIpv6?: string;
    description?: string;
}
/**
 * Describes a prefix list ID.
 */
export declare class RevokeSecurityGroupEgressResultUnknownIpPermissionsPrefixListIds extends SpeakeasyBase {
    description?: string;
    prefixListId?: string;
}
/**
 * <p>Describes a security group and Amazon Web Services account ID pair.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
 */
export declare class RevokeSecurityGroupEgressResultUnknownIpPermissionsUserIdGroupPairs extends SpeakeasyBase {
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
export declare class RevokeSecurityGroupEgressResultUnknownIpPermissions extends SpeakeasyBase {
    fromPort?: number;
    ipProtocol?: string;
    ipRanges?: RevokeSecurityGroupEgressResultUnknownIpPermissionsIpRanges[];
    ipv6Ranges?: RevokeSecurityGroupEgressResultUnknownIpPermissionsIpv6Ranges[];
    prefixListIds?: RevokeSecurityGroupEgressResultUnknownIpPermissionsPrefixListIds[];
    toPort?: number;
    userIdGroupPairs?: RevokeSecurityGroupEgressResultUnknownIpPermissionsUserIdGroupPairs[];
}
/**
 * Success
 */
export declare class RevokeSecurityGroupEgressResult extends SpeakeasyBase {
    return?: boolean;
    unknownIpPermissions?: RevokeSecurityGroupEgressResultUnknownIpPermissions[];
}
