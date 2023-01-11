package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDefaultVpcQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateDefaultVpcActionEnum action;
    public PostCreateDefaultVpcQueryParams withAction(PostCreateDefaultVpcActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateDefaultVpcVersionEnum version;
    public PostCreateDefaultVpcQueryParams withVersion(PostCreateDefaultVpcVersionEnum version) {
        this.version = version;
        return this;
    }
}