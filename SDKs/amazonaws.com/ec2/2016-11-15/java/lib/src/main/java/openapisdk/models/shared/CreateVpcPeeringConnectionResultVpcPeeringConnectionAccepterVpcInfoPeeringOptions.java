package openapisdk.models.shared;



/**
 * CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions
 * Information about the VPC peering connection options for the accepter or requester VPC.
**/
public class CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions {
    public java.util.Map<String, Object> allowDnsResolutionFromRemoteVpc;
    public CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions withAllowDnsResolutionFromRemoteVpc(java.util.Map<String, Object> allowDnsResolutionFromRemoteVpc) {
        this.allowDnsResolutionFromRemoteVpc = allowDnsResolutionFromRemoteVpc;
        return this;
    }
    public java.util.Map<String, Object> allowEgressFromLocalClassicLinkToRemoteVpc;
    public CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions withAllowEgressFromLocalClassicLinkToRemoteVpc(java.util.Map<String, Object> allowEgressFromLocalClassicLinkToRemoteVpc) {
        this.allowEgressFromLocalClassicLinkToRemoteVpc = allowEgressFromLocalClassicLinkToRemoteVpc;
        return this;
    }
    public java.util.Map<String, Object> allowEgressFromLocalVpcToRemoteClassicLink;
    public CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions withAllowEgressFromLocalVpcToRemoteClassicLink(java.util.Map<String, Object> allowEgressFromLocalVpcToRemoteClassicLink) {
        this.allowEgressFromLocalVpcToRemoteClassicLink = allowEgressFromLocalVpcToRemoteClassicLink;
        return this;
    }
}