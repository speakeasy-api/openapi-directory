import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an IPv4 CIDR block.
 */
export declare class CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoCidrBlockSet extends SpeakeasyBase {
    cidrBlock?: string;
}
/**
 * Describes an IPv6 CIDR block.
 */
export declare class CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoIpv6CidrBlockSet extends SpeakeasyBase {
    ipv6CidrBlock?: string;
}
/**
 * Information about the VPC peering connection options for the accepter or requester VPC.
 */
export declare class CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions extends SpeakeasyBase {
    allowDnsResolutionFromRemoteVpc?: boolean;
    allowEgressFromLocalClassicLinkToRemoteVpc?: boolean;
    allowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}
/**
 * Information about the accepter VPC. CIDR block information is only returned when describing an active VPC peering connection.
 */
export declare class CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo extends SpeakeasyBase {
    cidrBlock?: string;
    cidrBlockSet?: CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoCidrBlockSet[];
    ipv6CidrBlockSet?: CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoIpv6CidrBlockSet[];
    ownerId?: string;
    peeringOptions?: CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions;
    region?: string;
    vpcId?: string;
}
/**
 * Describes an IPv4 CIDR block.
 */
export declare class CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoCidrBlockSet extends SpeakeasyBase {
    cidrBlock?: string;
}
/**
 * Describes an IPv6 CIDR block.
 */
export declare class CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoIpv6CidrBlockSet extends SpeakeasyBase {
    ipv6CidrBlock?: string;
}
/**
 * Information about the VPC peering connection options for the accepter or requester VPC.
 */
export declare class CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions extends SpeakeasyBase {
    allowDnsResolutionFromRemoteVpc?: boolean;
    allowEgressFromLocalClassicLinkToRemoteVpc?: boolean;
    allowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}
/**
 * Information about the requester VPC. CIDR block information is only returned when describing an active VPC peering connection.
 */
export declare class CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo extends SpeakeasyBase {
    cidrBlock?: string;
    cidrBlockSet?: CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoCidrBlockSet[];
    ipv6CidrBlockSet?: CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoIpv6CidrBlockSet[];
    ownerId?: string;
    peeringOptions?: CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions;
    region?: string;
    vpcId?: string;
}
/**
 * The status of the VPC peering connection.
 */
export declare enum CreateVpcPeeringConnectionResultVpcPeeringConnectionStatusCodeEnum {
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
export declare class CreateVpcPeeringConnectionResultVpcPeeringConnectionStatus extends SpeakeasyBase {
    code?: CreateVpcPeeringConnectionResultVpcPeeringConnectionStatusCodeEnum;
    message?: string;
}
/**
 * Describes a tag.
 */
export declare class CreateVpcPeeringConnectionResultVpcPeeringConnectionTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the VPC peering connection.
 */
export declare class CreateVpcPeeringConnectionResultVpcPeeringConnection extends SpeakeasyBase {
    accepterVpcInfo?: CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo;
    expirationTime?: Date;
    requesterVpcInfo?: CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo;
    status?: CreateVpcPeeringConnectionResultVpcPeeringConnectionStatus;
    tags?: CreateVpcPeeringConnectionResultVpcPeeringConnectionTags[];
    vpcPeeringConnectionId?: string;
}
/**
 * Success
 */
export declare class CreateVpcPeeringConnectionResult extends SpeakeasyBase {
    vpcPeeringConnection?: CreateVpcPeeringConnectionResultVpcPeeringConnection;
}
