package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeAccountLimitsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeAccountLimitsActionEnum action;
    public GetDescribeAccountLimitsQueryParams withAction(GetDescribeAccountLimitsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeAccountLimitsVersionEnum version;
    public GetDescribeAccountLimitsQueryParams withVersion(GetDescribeAccountLimitsVersionEnum version) {
        this.version = version;
        return this;
    }
}