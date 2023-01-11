package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeAccountLimitsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeAccountLimitsActionEnum action;
    public PostDescribeAccountLimitsQueryParams withAction(PostDescribeAccountLimitsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeAccountLimitsVersionEnum version;
    public PostDescribeAccountLimitsQueryParams withVersion(PostDescribeAccountLimitsVersionEnum version) {
        this.version = version;
        return this;
    }
}