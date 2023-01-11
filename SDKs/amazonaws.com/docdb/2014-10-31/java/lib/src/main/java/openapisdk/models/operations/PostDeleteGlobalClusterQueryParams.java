package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteGlobalClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteGlobalClusterActionEnum action;
    public PostDeleteGlobalClusterQueryParams withAction(PostDeleteGlobalClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteGlobalClusterVersionEnum version;
    public PostDeleteGlobalClusterQueryParams withVersion(PostDeleteGlobalClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}