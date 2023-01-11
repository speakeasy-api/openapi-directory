package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyCacheClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyCacheClusterActionEnum action;
    public PostModifyCacheClusterQueryParams withAction(PostModifyCacheClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyCacheClusterVersionEnum version;
    public PostModifyCacheClusterQueryParams withVersion(PostModifyCacheClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}