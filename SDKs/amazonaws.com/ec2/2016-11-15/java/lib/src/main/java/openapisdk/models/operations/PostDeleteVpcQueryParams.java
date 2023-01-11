package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteVpcQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteVpcActionEnum action;
    public PostDeleteVpcQueryParams withAction(PostDeleteVpcActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteVpcVersionEnum version;
    public PostDeleteVpcQueryParams withVersion(PostDeleteVpcVersionEnum version) {
        this.version = version;
        return this;
    }
}