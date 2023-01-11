package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeImagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeImagesActionEnum action;
    public PostDescribeImagesQueryParams withAction(PostDescribeImagesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeImagesVersionEnum version;
    public PostDescribeImagesQueryParams withVersion(PostDescribeImagesVersionEnum version) {
        this.version = version;
        return this;
    }
}