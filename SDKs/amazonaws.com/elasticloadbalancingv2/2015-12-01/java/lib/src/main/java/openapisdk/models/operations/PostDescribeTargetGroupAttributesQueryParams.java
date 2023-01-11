package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTargetGroupAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeTargetGroupAttributesActionEnum action;
    public PostDescribeTargetGroupAttributesQueryParams withAction(PostDescribeTargetGroupAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeTargetGroupAttributesVersionEnum version;
    public PostDescribeTargetGroupAttributesQueryParams withVersion(PostDescribeTargetGroupAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}