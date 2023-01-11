package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * GetModifyVpcPeeringConnectionOptionsRequesterPeeringConnectionOptions
 * The VPC peering connection options.
**/
public class GetModifyVpcPeeringConnectionOptionsRequesterPeeringConnectionOptions {
    @SpeakeasyMetadata("queryParam:name=AllowDnsResolutionFromRemoteVpc")
    public Boolean allowDnsResolutionFromRemoteVpc;
    public GetModifyVpcPeeringConnectionOptionsRequesterPeeringConnectionOptions withAllowDnsResolutionFromRemoteVpc(Boolean allowDnsResolutionFromRemoteVpc) {
        this.allowDnsResolutionFromRemoteVpc = allowDnsResolutionFromRemoteVpc;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=AllowEgressFromLocalClassicLinkToRemoteVpc")
    public Boolean allowEgressFromLocalClassicLinkToRemoteVpc;
    public GetModifyVpcPeeringConnectionOptionsRequesterPeeringConnectionOptions withAllowEgressFromLocalClassicLinkToRemoteVpc(Boolean allowEgressFromLocalClassicLinkToRemoteVpc) {
        this.allowEgressFromLocalClassicLinkToRemoteVpc = allowEgressFromLocalClassicLinkToRemoteVpc;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=AllowEgressFromLocalVpcToRemoteClassicLink")
    public Boolean allowEgressFromLocalVpcToRemoteClassicLink;
    public GetModifyVpcPeeringConnectionOptionsRequesterPeeringConnectionOptions withAllowEgressFromLocalVpcToRemoteClassicLink(Boolean allowEgressFromLocalVpcToRemoteClassicLink) {
        this.allowEgressFromLocalVpcToRemoteClassicLink = allowEgressFromLocalVpcToRemoteClassicLink;
        return this;
    }
}