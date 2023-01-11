package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateVpcEndpointServiceConfigurationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateVpcEndpointServiceConfigurationActionEnum action;
    public PostCreateVpcEndpointServiceConfigurationQueryParams withAction(PostCreateVpcEndpointServiceConfigurationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateVpcEndpointServiceConfigurationVersionEnum version;
    public PostCreateVpcEndpointServiceConfigurationQueryParams withVersion(PostCreateVpcEndpointServiceConfigurationVersionEnum version) {
        this.version = version;
        return this;
    }
}