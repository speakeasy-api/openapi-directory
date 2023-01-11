package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyVpcEndpointServiceConfigurationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyVpcEndpointServiceConfigurationActionEnum action;
    public PostModifyVpcEndpointServiceConfigurationQueryParams withAction(PostModifyVpcEndpointServiceConfigurationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyVpcEndpointServiceConfigurationVersionEnum version;
    public PostModifyVpcEndpointServiceConfigurationQueryParams withVersion(PostModifyVpcEndpointServiceConfigurationVersionEnum version) {
        this.version = version;
        return this;
    }
}