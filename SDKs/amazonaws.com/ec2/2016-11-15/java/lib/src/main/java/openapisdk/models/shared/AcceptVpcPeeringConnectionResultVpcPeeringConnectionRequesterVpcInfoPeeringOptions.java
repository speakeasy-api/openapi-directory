package openapisdk.models.shared;



/**
 * AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions
 * Information about the VPC peering connection options for the accepter or requester VPC.
**/
public class AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions {
    public java.util.Map<String, Object> allowDnsResolutionFromRemoteVpc;
    public AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions withAllowDnsResolutionFromRemoteVpc(java.util.Map<String, Object> allowDnsResolutionFromRemoteVpc) {
        this.allowDnsResolutionFromRemoteVpc = allowDnsResolutionFromRemoteVpc;
        return this;
    }
    public java.util.Map<String, Object> allowEgressFromLocalClassicLinkToRemoteVpc;
    public AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions withAllowEgressFromLocalClassicLinkToRemoteVpc(java.util.Map<String, Object> allowEgressFromLocalClassicLinkToRemoteVpc) {
        this.allowEgressFromLocalClassicLinkToRemoteVpc = allowEgressFromLocalClassicLinkToRemoteVpc;
        return this;
    }
    public java.util.Map<String, Object> allowEgressFromLocalVpcToRemoteClassicLink;
    public AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions withAllowEgressFromLocalVpcToRemoteClassicLink(java.util.Map<String, Object> allowEgressFromLocalVpcToRemoteClassicLink) {
        this.allowEgressFromLocalVpcToRemoteClassicLink = allowEgressFromLocalVpcToRemoteClassicLink;
        return this;
    }
}