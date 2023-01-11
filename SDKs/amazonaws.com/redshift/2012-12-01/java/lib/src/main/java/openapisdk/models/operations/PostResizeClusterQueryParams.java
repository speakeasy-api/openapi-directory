package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResizeClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostResizeClusterActionEnum action;
    public PostResizeClusterQueryParams withAction(PostResizeClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostResizeClusterVersionEnum version;
    public PostResizeClusterQueryParams withVersion(PostResizeClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}