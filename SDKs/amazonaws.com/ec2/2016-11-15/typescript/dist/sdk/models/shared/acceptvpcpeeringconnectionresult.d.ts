import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an IPv4 CIDR block.
 */
export declare class AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoCidrBlockSet extends SpeakeasyBase {
    cidrBlock?: string;
}
/**
 * Describes an IPv6 CIDR block.
 */
export declare class AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoIpv6CidrBlockSet extends SpeakeasyBase {
    ipv6CidrBlock?: string;
}
/**
 * Information about the VPC peering connection options for the accepter or requester VPC.
 */
export declare class AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions extends SpeakeasyBase {
    allowDnsResolutionFromRemoteVpc?: boolean;
    allowEgressFromLocalClassicLinkToRemoteVpc?: boolean;
    allowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}
/**
 * Information about the accepter VPC. CIDR block information is only returned when describing an active VPC peering connection.
 */
export declare class AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo extends SpeakeasyBase {
    cidrBlock?: string;
    cidrBlockSet?: AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoCidrBlockSet[];
    ipv6CidrBlockSet?: AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoIpv6CidrBlockSet[];
    ownerId?: string;
    peeringOptions?: AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions;
    region?: string;
    vpcId?: string;
}
/**
 * Describes an IPv4 CIDR block.
 */
export declare class AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoCidrBlockSet extends SpeakeasyBase {
    cidrBlock?: string;
}
/**
 * Describes an IPv6 CIDR block.
 */
export declare class AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoIpv6CidrBlockSet extends SpeakeasyBase {
    ipv6CidrBlock?: string;
}
/**
 * Information about the VPC peering connection options for the accepter or requester VPC.
 */
export declare class AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions extends SpeakeasyBase {
    allowDnsResolutionFromRemoteVpc?: boolean;
    allowEgressFromLocalClassicLinkToRemoteVpc?: boolean;
    allowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}
/**
 * Information about the requester VPC. CIDR block information is only returned when describing an active VPC peering connection.
 */
export declare class AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo extends SpeakeasyBase {
    cidrBlock?: string;
    cidrBlockSet?: AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoCidrBlockSet[];
    ipv6CidrBlockSet?: AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoIpv6CidrBlockSet[];
    ownerId?: string;
    peeringOptions?: AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions;
    region?: string;
    vpcId?: string;
}
/**
 * The status of the VPC peering connection.
 */
export declare enum AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatusCodeEnum {
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
export declare class AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus extends SpeakeasyBase {
    code?: AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatusCodeEnum;
    message?: string;
}
/**
 * Describes a tag.
 */
export declare class AcceptVpcPeeringConnectionResultVpcPeeringConnectionTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the VPC peering connection.
 */
export declare class AcceptVpcPeeringConnectionResultVpcPeeringConnection extends SpeakeasyBase {
    accepterVpcInfo?: AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo;
    expirationTime?: Date;
    requesterVpcInfo?: AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo;
    status?: AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus;
    tags?: AcceptVpcPeeringConnectionResultVpcPeeringConnectionTags[];
    vpcPeeringConnectionId?: string;
}
/**
 * Success
 */
export declare class AcceptVpcPeeringConnectionResult extends SpeakeasyBase {
    vpcPeeringConnection?: AcceptVpcPeeringConnectionResultVpcPeeringConnection;
}
