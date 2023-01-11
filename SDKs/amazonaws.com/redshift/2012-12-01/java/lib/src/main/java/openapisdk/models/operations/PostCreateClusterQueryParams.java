package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateClusterActionEnum action;
    public PostCreateClusterQueryParams withAction(PostCreateClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateClusterVersionEnum version;
    public PostCreateClusterQueryParams withVersion(PostCreateClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}