package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTargetGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteTargetGroupActionEnum action;
    public PostDeleteTargetGroupQueryParams withAction(PostDeleteTargetGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteTargetGroupVersionEnum version;
    public PostDeleteTargetGroupQueryParams withVersion(PostDeleteTargetGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}