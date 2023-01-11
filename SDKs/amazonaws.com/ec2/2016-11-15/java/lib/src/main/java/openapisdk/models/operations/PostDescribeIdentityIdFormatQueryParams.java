package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeIdentityIdFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeIdentityIdFormatActionEnum action;
    public PostDescribeIdentityIdFormatQueryParams withAction(PostDescribeIdentityIdFormatActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeIdentityIdFormatVersionEnum version;
    public PostDescribeIdentityIdFormatQueryParams withVersion(PostDescribeIdentityIdFormatVersionEnum version) {
        this.version = version;
        return this;
    }
}