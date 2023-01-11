package openapisdk.models.shared;



/**
 * ModifyVpcPeeringConnectionOptionsResultAccepterPeeringConnectionOptions
 * Information about the VPC peering connection options for the accepter VPC.
**/
public class ModifyVpcPeeringConnectionOptionsResultAccepterPeeringConnectionOptions {
    public java.util.Map<String, Object> allowDnsResolutionFromRemoteVpc;
    public ModifyVpcPeeringConnectionOptionsResultAccepterPeeringConnectionOptions withAllowDnsResolutionFromRemoteVpc(java.util.Map<String, Object> allowDnsResolutionFromRemoteVpc) {
        this.allowDnsResolutionFromRemoteVpc = allowDnsResolutionFromRemoteVpc;
        return this;
    }
    public java.util.Map<String, Object> allowEgressFromLocalClassicLinkToRemoteVpc;
    public ModifyVpcPeeringConnectionOptionsResultAccepterPeeringConnectionOptions withAllowEgressFromLocalClassicLinkToRemoteVpc(java.util.Map<String, Object> allowEgressFromLocalClassicLinkToRemoteVpc) {
        this.allowEgressFromLocalClassicLinkToRemoteVpc = allowEgressFromLocalClassicLinkToRemoteVpc;
        return this;
    }
    public java.util.Map<String, Object> allowEgressFromLocalVpcToRemoteClassicLink;
    public ModifyVpcPeeringConnectionOptionsResultAccepterPeeringConnectionOptions withAllowEgressFromLocalVpcToRemoteClassicLink(java.util.Map<String, Object> allowEgressFromLocalVpcToRemoteClassicLink) {
        this.allowEgressFromLocalVpcToRemoteClassicLink = allowEgressFromLocalVpcToRemoteClassicLink;
        return this;
    }
}