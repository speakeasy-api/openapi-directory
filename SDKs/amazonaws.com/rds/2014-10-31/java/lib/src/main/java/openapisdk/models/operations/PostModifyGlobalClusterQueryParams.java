package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyGlobalClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyGlobalClusterActionEnum action;
    public PostModifyGlobalClusterQueryParams withAction(PostModifyGlobalClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyGlobalClusterVersionEnum version;
    public PostModifyGlobalClusterQueryParams withVersion(PostModifyGlobalClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}