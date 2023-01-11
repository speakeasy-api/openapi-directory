import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the VPC peering connection options for the accepter or requester VPC.
**/
export declare class CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions extends SpeakeasyBase {
    allowDnsResolutionFromRemoteVpc?: Record<string, any>;
    allowEgressFromLocalClassicLinkToRemoteVpc?: Record<string, any>;
    allowEgressFromLocalVpcToRemoteClassicLink?: Record<string, any>;
}
/**
 * Information about the accepter VPC. CIDR block information is only returned when describing an active VPC peering connection.
**/
export declare class CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo extends SpeakeasyBase {
    cidrBlock?: Record<string, any>;
    cidrBlockSet?: Record<string, any>;
    ipv6CidrBlockSet?: Record<string, any>;
    ownerId?: Record<string, any>;
    peeringOptions?: CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions;
    region?: Record<string, any>;
    vpcId?: Record<string, any>;
}
/**
 * Information about the VPC peering connection options for the accepter or requester VPC.
**/
export declare class CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions extends SpeakeasyBase {
    allowDnsResolutionFromRemoteVpc?: Record<string, any>;
    allowEgressFromLocalClassicLinkToRemoteVpc?: Record<string, any>;
    allowEgressFromLocalVpcToRemoteClassicLink?: Record<string, any>;
}
/**
 * Information about the requester VPC. CIDR block information is only returned when describing an active VPC peering connection.
**/
export declare class CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo extends SpeakeasyBase {
    cidrBlock?: Record<string, any>;
    cidrBlockSet?: Record<string, any>;
    ipv6CidrBlockSet?: Record<string, any>;
    ownerId?: Record<string, any>;
    peeringOptions?: CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions;
    region?: Record<string, any>;
    vpcId?: Record<string, any>;
}
/**
 * The status of the VPC peering connection.
**/
export declare class CreateVpcPeeringConnectionResultVpcPeeringConnectionStatus extends SpeakeasyBase {
    code?: Record<string, any>;
    message?: Record<string, any>;
}
/**
 * Information about the VPC peering connection.
**/
export declare class CreateVpcPeeringConnectionResultVpcPeeringConnection extends SpeakeasyBase {
    accepterVpcInfo?: CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo;
    expirationTime?: Record<string, any>;
    requesterVpcInfo?: CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo;
    status?: CreateVpcPeeringConnectionResultVpcPeeringConnectionStatus;
    tags?: Record<string, any>;
    vpcPeeringConnectionId?: Record<string, any>;
}
export declare class CreateVpcPeeringConnectionResult extends SpeakeasyBase {
    vpcPeeringConnection?: CreateVpcPeeringConnectionResultVpcPeeringConnection;
}
