package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyTargetGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyTargetGroupActionEnum action;
    public PostModifyTargetGroupQueryParams withAction(PostModifyTargetGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyTargetGroupVersionEnum version;
    public PostModifyTargetGroupQueryParams withVersion(PostModifyTargetGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}