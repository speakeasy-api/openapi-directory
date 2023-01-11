package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTargetGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateTargetGroupActionEnum action;
    public PostCreateTargetGroupQueryParams withAction(PostCreateTargetGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateTargetGroupVersionEnum version;
    public PostCreateTargetGroupQueryParams withVersion(PostCreateTargetGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}