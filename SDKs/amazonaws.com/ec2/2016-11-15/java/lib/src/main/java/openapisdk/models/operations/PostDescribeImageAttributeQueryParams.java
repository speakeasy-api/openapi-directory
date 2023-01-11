package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeImageAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeImageAttributeActionEnum action;
    public PostDescribeImageAttributeQueryParams withAction(PostDescribeImageAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeImageAttributeVersionEnum version;
    public PostDescribeImageAttributeQueryParams withVersion(PostDescribeImageAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}