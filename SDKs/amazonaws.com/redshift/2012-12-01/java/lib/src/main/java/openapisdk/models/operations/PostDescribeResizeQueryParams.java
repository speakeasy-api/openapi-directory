package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeResizeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeResizeActionEnum action;
    public PostDescribeResizeQueryParams withAction(PostDescribeResizeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeResizeVersionEnum version;
    public PostDescribeResizeQueryParams withVersion(PostDescribeResizeVersionEnum version) {
        this.version = version;
        return this;
    }
}