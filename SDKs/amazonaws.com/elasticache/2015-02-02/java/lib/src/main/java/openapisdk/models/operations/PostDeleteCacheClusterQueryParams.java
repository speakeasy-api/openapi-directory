package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteCacheClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteCacheClusterActionEnum action;
    public PostDeleteCacheClusterQueryParams withAction(PostDeleteCacheClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteCacheClusterVersionEnum version;
    public PostDeleteCacheClusterQueryParams withVersion(PostDeleteCacheClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}