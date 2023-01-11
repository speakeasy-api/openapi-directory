package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyClusterActionEnum action;
    public PostModifyClusterQueryParams withAction(PostModifyClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyClusterVersionEnum version;
    public PostModifyClusterQueryParams withVersion(PostModifyClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}