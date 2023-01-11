package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTargetHealthQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeTargetHealthActionEnum action;
    public PostDescribeTargetHealthQueryParams withAction(PostDescribeTargetHealthActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeTargetHealthVersionEnum version;
    public PostDescribeTargetHealthQueryParams withVersion(PostDescribeTargetHealthVersionEnum version) {
        this.version = version;
        return this;
    }
}