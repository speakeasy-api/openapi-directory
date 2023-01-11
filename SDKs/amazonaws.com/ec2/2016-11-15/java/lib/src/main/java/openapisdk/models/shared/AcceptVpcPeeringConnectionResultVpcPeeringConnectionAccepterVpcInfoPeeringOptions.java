package openapisdk.models.shared;



/**
 * AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions
 * Information about the VPC peering connection options for the accepter or requester VPC.
**/
public class AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions {
    public java.util.Map<String, Object> allowDnsResolutionFromRemoteVpc;
    public AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions withAllowDnsResolutionFromRemoteVpc(java.util.Map<String, Object> allowDnsResolutionFromRemoteVpc) {
        this.allowDnsResolutionFromRemoteVpc = allowDnsResolutionFromRemoteVpc;
        return this;
    }
    public java.util.Map<String, Object> allowEgressFromLocalClassicLinkToRemoteVpc;
    public AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions withAllowEgressFromLocalClassicLinkToRemoteVpc(java.util.Map<String, Object> allowEgressFromLocalClassicLinkToRemoteVpc) {
        this.allowEgressFromLocalClassicLinkToRemoteVpc = allowEgressFromLocalClassicLinkToRemoteVpc;
        return this;
    }
    public java.util.Map<String, Object> allowEgressFromLocalVpcToRemoteClassicLink;
    public AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions withAllowEgressFromLocalVpcToRemoteClassicLink(java.util.Map<String, Object> allowEgressFromLocalVpcToRemoteClassicLink) {
        this.allowEgressFromLocalVpcToRemoteClassicLink = allowEgressFromLocalVpcToRemoteClassicLink;
        return this;
    }
}