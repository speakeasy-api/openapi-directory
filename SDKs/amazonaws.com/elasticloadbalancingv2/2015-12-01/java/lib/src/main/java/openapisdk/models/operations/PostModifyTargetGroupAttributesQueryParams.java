package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyTargetGroupAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyTargetGroupAttributesActionEnum action;
    public PostModifyTargetGroupAttributesQueryParams withAction(PostModifyTargetGroupAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyTargetGroupAttributesVersionEnum version;
    public PostModifyTargetGroupAttributesQueryParams withVersion(PostModifyTargetGroupAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}