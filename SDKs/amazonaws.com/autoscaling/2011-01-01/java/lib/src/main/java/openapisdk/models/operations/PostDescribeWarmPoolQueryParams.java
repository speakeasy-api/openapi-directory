package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeWarmPoolQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeWarmPoolActionEnum action;
    public PostDescribeWarmPoolQueryParams withAction(PostDescribeWarmPoolActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeWarmPoolVersionEnum version;
    public PostDescribeWarmPoolQueryParams withVersion(PostDescribeWarmPoolVersionEnum version) {
        this.version = version;
        return this;
    }
}