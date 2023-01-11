package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyVpcEndpointQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyVpcEndpointActionEnum action;
    public PostModifyVpcEndpointQueryParams withAction(PostModifyVpcEndpointActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyVpcEndpointVersionEnum version;
    public PostModifyVpcEndpointQueryParams withVersion(PostModifyVpcEndpointVersionEnum version) {
        this.version = version;
        return this;
    }
}