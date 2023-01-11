package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateGlobalClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateGlobalClusterActionEnum action;
    public PostCreateGlobalClusterQueryParams withAction(PostCreateGlobalClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateGlobalClusterVersionEnum version;
    public PostCreateGlobalClusterQueryParams withVersion(PostCreateGlobalClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}