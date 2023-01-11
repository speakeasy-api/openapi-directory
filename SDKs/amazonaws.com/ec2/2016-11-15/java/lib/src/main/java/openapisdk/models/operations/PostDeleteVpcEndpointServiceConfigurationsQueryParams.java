package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteVpcEndpointServiceConfigurationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteVpcEndpointServiceConfigurationsActionEnum action;
    public PostDeleteVpcEndpointServiceConfigurationsQueryParams withAction(PostDeleteVpcEndpointServiceConfigurationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteVpcEndpointServiceConfigurationsVersionEnum version;
    public PostDeleteVpcEndpointServiceConfigurationsQueryParams withVersion(PostDeleteVpcEndpointServiceConfigurationsVersionEnum version) {
        this.version = version;
        return this;
    }
}