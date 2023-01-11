package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateVpcQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateVpcActionEnum action;
    public PostCreateVpcQueryParams withAction(PostCreateVpcActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateVpcVersionEnum version;
    public PostCreateVpcQueryParams withVersion(PostCreateVpcVersionEnum version) {
        this.version = version;
        return this;
    }
}