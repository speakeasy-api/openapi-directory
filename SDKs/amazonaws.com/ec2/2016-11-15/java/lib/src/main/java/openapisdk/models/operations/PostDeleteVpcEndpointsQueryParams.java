package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteVpcEndpointsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteVpcEndpointsActionEnum action;
    public PostDeleteVpcEndpointsQueryParams withAction(PostDeleteVpcEndpointsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteVpcEndpointsVersionEnum version;
    public PostDeleteVpcEndpointsQueryParams withVersion(PostDeleteVpcEndpointsVersionEnum version) {
        this.version = version;
        return this;
    }
}