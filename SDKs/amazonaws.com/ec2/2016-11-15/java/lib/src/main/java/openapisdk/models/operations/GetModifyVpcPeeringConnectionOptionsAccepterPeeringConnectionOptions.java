package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions
 * The VPC peering connection options.
**/
public class GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions {
    @SpeakeasyMetadata("queryParam:name=AllowDnsResolutionFromRemoteVpc")
    public Boolean allowDnsResolutionFromRemoteVpc;
    public GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions withAllowDnsResolutionFromRemoteVpc(Boolean allowDnsResolutionFromRemoteVpc) {
        this.allowDnsResolutionFromRemoteVpc = allowDnsResolutionFromRemoteVpc;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=AllowEgressFromLocalClassicLinkToRemoteVpc")
    public Boolean allowEgressFromLocalClassicLinkToRemoteVpc;
    public GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions withAllowEgressFromLocalClassicLinkToRemoteVpc(Boolean allowEgressFromLocalClassicLinkToRemoteVpc) {
        this.allowEgressFromLocalClassicLinkToRemoteVpc = allowEgressFromLocalClassicLinkToRemoteVpc;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=AllowEgressFromLocalVpcToRemoteClassicLink")
    public Boolean allowEgressFromLocalVpcToRemoteClassicLink;
    public GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions withAllowEgressFromLocalVpcToRemoteClassicLink(Boolean allowEgressFromLocalVpcToRemoteClassicLink) {
        this.allowEgressFromLocalVpcToRemoteClassicLink = allowEgressFromLocalVpcToRemoteClassicLink;
        return this;
    }
}