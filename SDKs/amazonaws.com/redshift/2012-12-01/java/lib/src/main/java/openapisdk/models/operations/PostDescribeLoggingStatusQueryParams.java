package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLoggingStatusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeLoggingStatusActionEnum action;
    public PostDescribeLoggingStatusQueryParams withAction(PostDescribeLoggingStatusActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeLoggingStatusVersionEnum version;
    public PostDescribeLoggingStatusQueryParams withVersion(PostDescribeLoggingStatusVersionEnum version) {
        this.version = version;
        return this;
    }
}