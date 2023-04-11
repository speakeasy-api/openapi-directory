import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the VPC peering connection options for the accepter VPC.
 */
export declare class ModifyVpcPeeringConnectionOptionsResultAccepterPeeringConnectionOptions extends SpeakeasyBase {
    allowDnsResolutionFromRemoteVpc?: boolean;
    allowEgressFromLocalClassicLinkToRemoteVpc?: boolean;
    allowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}
/**
 * Information about the VPC peering connection options for the requester VPC.
 */
export declare class ModifyVpcPeeringConnectionOptionsResultRequesterPeeringConnectionOptions extends SpeakeasyBase {
    allowDnsResolutionFromRemoteVpc?: boolean;
    allowEgressFromLocalClassicLinkToRemoteVpc?: boolean;
    allowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}
/**
 * Success
 */
export declare class ModifyVpcPeeringConnectionOptionsResult extends SpeakeasyBase {
    accepterPeeringConnectionOptions?: ModifyVpcPeeringConnectionOptionsResultAccepterPeeringConnectionOptions;
    requesterPeeringConnectionOptions?: ModifyVpcPeeringConnectionOptionsResultRequesterPeeringConnectionOptions;
}
