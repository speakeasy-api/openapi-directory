import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an IPv4 CIDR block.
 */
export declare class DescribeVpcPeeringConnectionsResultVpcPeeringConnectionsAccepterVpcInfoCidrBlockSet extends SpeakeasyBase {
    cidrBlock?: string;
}
/**
 * Describes an IPv6 CIDR block.
 */
export declare class DescribeVpcPeeringConnectionsResultVpcPeeringConnectionsAccepterVpcInfoIpv6CidrBlockSet extends SpeakeasyBase {
    ipv6CidrBlock?: string;
}
/**
 * Information about the VPC peering connection options for the accepter or requester VPC.
 */
export declare class DescribeVpcPeeringConnectionsResultVpcPeeringConnectionsAccepterVpcInfoPeeringOptions extends SpeakeasyBase {
    allowDnsResolutionFromRemoteVpc?: boolean;
    allowEgressFromLocalClassicLinkToRemoteVpc?: boolean;
    allowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}
/**
 * Information about the accepter VPC. CIDR block information is only returned when describing an active VPC peering connection.
 */
export declare class DescribeVpcPeeringConnectionsResultVpcPeeringConnectionsAccepterVpcInfo extends SpeakeasyBase {
    cidrBlock?: string;
    cidrBlockSet?: DescribeVpcPeeringConnectionsResultVpcPeeringConnectionsAccepterVpcInfoCidrBlockSet[];
    ipv6CidrBlockSet?: DescribeVpcPeeringConnectionsResultVpcPeeringConnectionsAccepterVpcInfoIpv6CidrBlockSet[];
    ownerId?: string;
    peeringOptions?: DescribeVpcPeeringConnectionsResultVpcPeeringConnectionsAccepterVpcInfoPeeringOptions;
    region?: string;
    vpcId?: string;
}
/**
 * Describes an IPv4 CIDR block.
 */
export declare class DescribeVpcPeeringConnectionsResultVpcPeeringConnectionsRequesterVpcInfoCidrBlockSet extends SpeakeasyBase {
    cidrBlock?: string;
}
/**
 * Describes an IPv6 CIDR block.
 */
export declare class DescribeVpcPeeringConnectionsResultVpcPeeringConnectionsRequesterVpcInfoIpv6CidrBlockSet extends SpeakeasyBase {
    ipv6CidrBlock?: string;
}
/**
 * Information about the VPC peering connection options for the accepter or requester VPC.
 */
export declare class DescribeVpcPeeringConnectionsResultVpcPeeringConnectionsRequesterVpcInfoPeeringOptions extends SpeakeasyBase {
    allowDnsResolutionFromRemoteVpc?: boolean;
    allowEgressFromLocalClassicLinkToRemoteVpc?: boolean;
    allowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}
/**
 * Information about the requester VPC. CIDR block information is only returned when describing an active VPC peering connection.
 */
export declare class DescribeVpcPeeringConnectionsResultVpcPeeringConnectionsRequesterVpcInfo extends SpeakeasyBase {
    cidrBlock?: string;
    cidrBlockSet?: DescribeVpcPeeringConnectionsResultVpcPeeringConnectionsRequesterVpcInfoCidrBlockSet[];
    ipv6CidrBlockSet?: DescribeVpcPeeringConnectionsResultVpcPeeringConnectionsRequesterVpcInfoIpv6CidrBlockSet[];
    ownerId?: string;
    peeringOptions?: DescribeVpcPeeringConnectionsResultVpcPeeringConnectionsRequesterVpcInfoPeeringOptions;
    region?: string;
    vpcId?: string;
}
/**
 * The status of the VPC peering connection.
 */
export declare enum DescribeVpcPeeringConnectionsResultVpcPeeringConnectionsStatusCodeEnum {
    InitiatingRequest = "initiating-request",
    PendingAcceptance = "pending-acceptance",
    Active = "active",
    Deleted = "deleted",
    Rejected = "rejected",
    Failed = "failed",
    Expired = "expired",
    Provisioning = "provisioning",
    Deleting = "deleting"
}
/**
 * The status of the VPC peering connection.
 */
export declare class DescribeVpcPeeringConnectionsResultVpcPeeringConnectionsStatus extends SpeakeasyBase {
    code?: DescribeVpcPeeringConnectionsResultVpcPeeringConnectionsStatusCodeEnum;
    message?: string;
}
/**
 * Describes a tag.
 */
export declare class DescribeVpcPeeringConnectionsResultVpcPeeringConnectionsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a VPC peering connection.
 */
export declare class DescribeVpcPeeringConnectionsResultVpcPeeringConnections extends SpeakeasyBase {
    accepterVpcInfo?: DescribeVpcPeeringConnectionsResultVpcPeeringConnectionsAccepterVpcInfo;
    expirationTime?: Date;
    requesterVpcInfo?: DescribeVpcPeeringConnectionsResultVpcPeeringConnectionsRequesterVpcInfo;
    status?: DescribeVpcPeeringConnectionsResultVpcPeeringConnectionsStatus;
    tags?: DescribeVpcPeeringConnectionsResultVpcPeeringConnectionsTags[];
    vpcPeeringConnectionId?: string;
}
/**
 * Success
 */
export declare class DescribeVpcPeeringConnectionsResult extends SpeakeasyBase {
    nextToken?: string;
    vpcPeeringConnections?: DescribeVpcPeeringConnectionsResultVpcPeeringConnections[];
}
