import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the VPC peering connection options for the accepter or requester VPC.
**/
export declare class AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions extends SpeakeasyBase {
    allowDnsResolutionFromRemoteVpc?: Record<string, any>;
    allowEgressFromLocalClassicLinkToRemoteVpc?: Record<string, any>;
    allowEgressFromLocalVpcToRemoteClassicLink?: Record<string, any>;
}
/**
 * Information about the accepter VPC. CIDR block information is only returned when describing an active VPC peering connection.
**/
export declare class AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo extends SpeakeasyBase {
    cidrBlock?: Record<string, any>;
    cidrBlockSet?: Record<string, any>;
    ipv6CidrBlockSet?: Record<string, any>;
    ownerId?: Record<string, any>;
    peeringOptions?: AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions;
    region?: Record<string, any>;
    vpcId?: Record<string, any>;
}
/**
 * Information about the VPC peering connection options for the accepter or requester VPC.
**/
export declare class AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions extends SpeakeasyBase {
    allowDnsResolutionFromRemoteVpc?: Record<string, any>;
    allowEgressFromLocalClassicLinkToRemoteVpc?: Record<string, any>;
    allowEgressFromLocalVpcToRemoteClassicLink?: Record<string, any>;
}
/**
 * Information about the requester VPC. CIDR block information is only returned when describing an active VPC peering connection.
**/
export declare class AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo extends SpeakeasyBase {
    cidrBlock?: Record<string, any>;
    cidrBlockSet?: Record<string, any>;
    ipv6CidrBlockSet?: Record<string, any>;
    ownerId?: Record<string, any>;
    peeringOptions?: AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions;
    region?: Record<string, any>;
    vpcId?: Record<string, any>;
}
/**
 * The status of the VPC peering connection.
**/
export declare class AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus extends SpeakeasyBase {
    code?: Record<string, any>;
    message?: Record<string, any>;
}
/**
 * Information about the VPC peering connection.
**/
export declare class AcceptVpcPeeringConnectionResultVpcPeeringConnection extends SpeakeasyBase {
    accepterVpcInfo?: AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo;
    expirationTime?: Record<string, any>;
    requesterVpcInfo?: AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo;
    status?: AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus;
    tags?: Record<string, any>;
    vpcPeeringConnectionId?: Record<string, any>;
}
export declare class AcceptVpcPeeringConnectionResult extends SpeakeasyBase {
    vpcPeeringConnection?: AcceptVpcPeeringConnectionResultVpcPeeringConnection;
}
