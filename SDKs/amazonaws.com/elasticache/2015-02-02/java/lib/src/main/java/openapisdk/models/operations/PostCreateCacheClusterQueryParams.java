package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateCacheClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateCacheClusterActionEnum action;
    public PostCreateCacheClusterQueryParams withAction(PostCreateCacheClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateCacheClusterVersionEnum version;
    public PostCreateCacheClusterQueryParams withVersion(PostCreateCacheClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}