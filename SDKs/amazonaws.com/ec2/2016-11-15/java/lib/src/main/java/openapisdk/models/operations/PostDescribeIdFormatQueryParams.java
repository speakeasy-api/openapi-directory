package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeIdFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeIdFormatActionEnum action;
    public PostDescribeIdFormatQueryParams withAction(PostDescribeIdFormatActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeIdFormatVersionEnum version;
    public PostDescribeIdFormatQueryParams withVersion(PostDescribeIdFormatVersionEnum version) {
        this.version = version;
        return this;
    }
}