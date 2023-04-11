import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about the VPC peering connection options for the accepter or requester VPC.
 */
export declare class VpcInfoPeeringOptionsDetails extends SpeakeasyBase {
    allowDnsResolutionFromRemoteVpc?: boolean;
    allowEgressFromLocalClassicLinkToRemoteVpc?: boolean;
    allowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}
