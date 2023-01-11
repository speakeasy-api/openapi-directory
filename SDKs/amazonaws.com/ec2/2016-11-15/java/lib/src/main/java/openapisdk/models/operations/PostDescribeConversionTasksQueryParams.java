package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeConversionTasksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeConversionTasksActionEnum action;
    public PostDescribeConversionTasksQueryParams withAction(PostDescribeConversionTasksActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeConversionTasksVersionEnum version;
    public PostDescribeConversionTasksQueryParams withVersion(PostDescribeConversionTasksVersionEnum version) {
        this.version = version;
        return this;
    }
}