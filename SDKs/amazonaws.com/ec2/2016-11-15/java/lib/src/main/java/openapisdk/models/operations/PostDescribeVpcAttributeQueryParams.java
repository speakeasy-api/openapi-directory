package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeVpcAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeVpcAttributeActionEnum action;
    public PostDescribeVpcAttributeQueryParams withAction(PostDescribeVpcAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeVpcAttributeVersionEnum version;
    public PostDescribeVpcAttributeQueryParams withVersion(PostDescribeVpcAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}