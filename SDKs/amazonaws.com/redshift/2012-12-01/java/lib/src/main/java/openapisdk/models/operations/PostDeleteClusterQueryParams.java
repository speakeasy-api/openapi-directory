package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteClusterActionEnum action;
    public PostDeleteClusterQueryParams withAction(PostDeleteClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteClusterVersionEnum version;
    public PostDeleteClusterQueryParams withVersion(PostDeleteClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}