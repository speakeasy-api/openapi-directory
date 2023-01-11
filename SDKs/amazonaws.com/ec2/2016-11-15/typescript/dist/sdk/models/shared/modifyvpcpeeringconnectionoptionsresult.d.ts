import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the VPC peering connection options for the accepter VPC.
**/
export declare class ModifyVpcPeeringConnectionOptionsResultAccepterPeeringConnectionOptions extends SpeakeasyBase {
    allowDnsResolutionFromRemoteVpc?: Record<string, any>;
    allowEgressFromLocalClassicLinkToRemoteVpc?: Record<string, any>;
    allowEgressFromLocalVpcToRemoteClassicLink?: Record<string, any>;
}
/**
 * Information about the VPC peering connection options for the requester VPC.
**/
export declare class ModifyVpcPeeringConnectionOptionsResultRequesterPeeringConnectionOptions extends SpeakeasyBase {
    allowDnsResolutionFromRemoteVpc?: Record<string, any>;
    allowEgressFromLocalClassicLinkToRemoteVpc?: Record<string, any>;
    allowEgressFromLocalVpcToRemoteClassicLink?: Record<string, any>;
}
export declare class ModifyVpcPeeringConnectionOptionsResult extends SpeakeasyBase {
    accepterPeeringConnectionOptions?: ModifyVpcPeeringConnectionOptionsResultAccepterPeeringConnectionOptions;
    requesterPeeringConnectionOptions?: ModifyVpcPeeringConnectionOptionsResultRequesterPeeringConnectionOptions;
}
