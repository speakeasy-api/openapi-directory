package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStartVpcEndpointServicePrivateDnsVerificationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostStartVpcEndpointServicePrivateDnsVerificationActionEnum action;
    public PostStartVpcEndpointServicePrivateDnsVerificationQueryParams withAction(PostStartVpcEndpointServicePrivateDnsVerificationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostStartVpcEndpointServicePrivateDnsVerificationVersionEnum version;
    public PostStartVpcEndpointServicePrivateDnsVerificationQueryParams withVersion(PostStartVpcEndpointServicePrivateDnsVerificationVersionEnum version) {
        this.version = version;
        return this;
    }
}