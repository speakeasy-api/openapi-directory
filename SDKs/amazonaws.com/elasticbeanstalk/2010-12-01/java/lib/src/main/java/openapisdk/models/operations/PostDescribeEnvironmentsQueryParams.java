package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeEnvironmentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeEnvironmentsActionEnum action;
    public PostDescribeEnvironmentsQueryParams withAction(PostDescribeEnvironmentsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeEnvironmentsVersionEnum version;
    public PostDescribeEnvironmentsQueryParams withVersion(PostDescribeEnvironmentsVersionEnum version) {
        this.version = version;
        return this;
    }
}