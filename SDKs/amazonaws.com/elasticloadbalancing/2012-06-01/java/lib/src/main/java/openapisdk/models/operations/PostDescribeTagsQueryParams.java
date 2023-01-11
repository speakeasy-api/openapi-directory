package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeTagsActionEnum action;
    public PostDescribeTagsQueryParams withAction(PostDescribeTagsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeTagsVersionEnum version;
    public PostDescribeTagsQueryParams withVersion(PostDescribeTagsVersionEnum version) {
        this.version = version;
        return this;
    }
}