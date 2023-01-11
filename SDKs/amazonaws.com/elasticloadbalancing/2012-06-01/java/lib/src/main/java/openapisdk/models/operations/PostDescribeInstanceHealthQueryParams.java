package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeInstanceHealthQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeInstanceHealthActionEnum action;
    public PostDescribeInstanceHealthQueryParams withAction(PostDescribeInstanceHealthActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeInstanceHealthVersionEnum version;
    public PostDescribeInstanceHealthQueryParams withVersion(PostDescribeInstanceHealthVersionEnum version) {
        this.version = version;
        return this;
    }
}