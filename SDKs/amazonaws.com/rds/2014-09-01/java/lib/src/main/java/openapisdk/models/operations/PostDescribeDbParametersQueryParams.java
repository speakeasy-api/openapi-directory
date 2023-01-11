package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbParametersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeDbParametersActionEnum action;
    public PostDescribeDbParametersQueryParams withAction(PostDescribeDbParametersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeDbParametersVersionEnum version;
    public PostDescribeDbParametersQueryParams withVersion(PostDescribeDbParametersVersionEnum version) {
        this.version = version;
        return this;
    }
}