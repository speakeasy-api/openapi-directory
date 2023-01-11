package openapisdk.models.shared;



/**
 * ModifyVpcPeeringConnectionOptionsResultRequesterPeeringConnectionOptions
 * Information about the VPC peering connection options for the requester VPC.
**/
public class ModifyVpcPeeringConnectionOptionsResultRequesterPeeringConnectionOptions {
    public java.util.Map<String, Object> allowDnsResolutionFromRemoteVpc;
    public ModifyVpcPeeringConnectionOptionsResultRequesterPeeringConnectionOptions withAllowDnsResolutionFromRemoteVpc(java.util.Map<String, Object> allowDnsResolutionFromRemoteVpc) {
        this.allowDnsResolutionFromRemoteVpc = allowDnsResolutionFromRemoteVpc;
        return this;
    }
    public java.util.Map<String, Object> allowEgressFromLocalClassicLinkToRemoteVpc;
    public ModifyVpcPeeringConnectionOptionsResultRequesterPeeringConnectionOptions withAllowEgressFromLocalClassicLinkToRemoteVpc(java.util.Map<String, Object> allowEgressFromLocalClassicLinkToRemoteVpc) {
        this.allowEgressFromLocalClassicLinkToRemoteVpc = allowEgressFromLocalClassicLinkToRemoteVpc;
        return this;
    }
    public java.util.Map<String, Object> allowEgressFromLocalVpcToRemoteClassicLink;
    public ModifyVpcPeeringConnectionOptionsResultRequesterPeeringConnectionOptions withAllowEgressFromLocalVpcToRemoteClassicLink(java.util.Map<String, Object> allowEgressFromLocalVpcToRemoteClassicLink) {
        this.allowEgressFromLocalVpcToRemoteClassicLink = allowEgressFromLocalVpcToRemoteClassicLink;
        return this;
    }
}