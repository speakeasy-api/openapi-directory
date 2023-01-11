package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeApplicationVersionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeApplicationVersionsActionEnum action;
    public PostDescribeApplicationVersionsQueryParams withAction(PostDescribeApplicationVersionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeApplicationVersionsVersionEnum version;
    public PostDescribeApplicationVersionsQueryParams withVersion(PostDescribeApplicationVersionsVersionEnum version) {
        this.version = version;
        return this;
    }
}