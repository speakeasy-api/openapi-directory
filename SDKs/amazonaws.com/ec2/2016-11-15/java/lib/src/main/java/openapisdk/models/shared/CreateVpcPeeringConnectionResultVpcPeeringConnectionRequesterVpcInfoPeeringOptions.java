package openapisdk.models.shared;



/**
 * CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions
 * Information about the VPC peering connection options for the accepter or requester VPC.
**/
public class CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions {
    public java.util.Map<String, Object> allowDnsResolutionFromRemoteVpc;
    public CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions withAllowDnsResolutionFromRemoteVpc(java.util.Map<String, Object> allowDnsResolutionFromRemoteVpc) {
        this.allowDnsResolutionFromRemoteVpc = allowDnsResolutionFromRemoteVpc;
        return this;
    }
    public java.util.Map<String, Object> allowEgressFromLocalClassicLinkToRemoteVpc;
    public CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions withAllowEgressFromLocalClassicLinkToRemoteVpc(java.util.Map<String, Object> allowEgressFromLocalClassicLinkToRemoteVpc) {
        this.allowEgressFromLocalClassicLinkToRemoteVpc = allowEgressFromLocalClassicLinkToRemoteVpc;
        return this;
    }
    public java.util.Map<String, Object> allowEgressFromLocalVpcToRemoteClassicLink;
    public CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions withAllowEgressFromLocalVpcToRemoteClassicLink(java.util.Map<String, Object> allowEgressFromLocalVpcToRemoteClassicLink) {
        this.allowEgressFromLocalVpcToRemoteClassicLink = allowEgressFromLocalVpcToRemoteClassicLink;
        return this;
    }
}