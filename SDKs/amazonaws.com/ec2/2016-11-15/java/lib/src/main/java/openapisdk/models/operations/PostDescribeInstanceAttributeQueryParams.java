package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeInstanceAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeInstanceAttributeActionEnum action;
    public PostDescribeInstanceAttributeQueryParams withAction(PostDescribeInstanceAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeInstanceAttributeVersionEnum version;
    public PostDescribeInstanceAttributeQueryParams withVersion(PostDescribeInstanceAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}