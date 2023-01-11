package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateVpcEndpointQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateVpcEndpointActionEnum action;
    public PostCreateVpcEndpointQueryParams withAction(PostCreateVpcEndpointActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateVpcEndpointVersionEnum version;
    public PostCreateVpcEndpointQueryParams withVersion(PostCreateVpcEndpointVersionEnum version) {
        this.version = version;
        return this;
    }
}