package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRebootCacheClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRebootCacheClusterActionEnum action;
    public PostRebootCacheClusterQueryParams withAction(PostRebootCacheClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRebootCacheClusterVersionEnum version;
    public PostRebootCacheClusterQueryParams withVersion(PostRebootCacheClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}