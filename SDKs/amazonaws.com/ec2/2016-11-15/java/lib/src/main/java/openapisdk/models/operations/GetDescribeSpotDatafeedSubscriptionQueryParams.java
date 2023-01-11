package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeSpotDatafeedSubscriptionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeSpotDatafeedSubscriptionActionEnum action;
    public GetDescribeSpotDatafeedSubscriptionQueryParams withAction(GetDescribeSpotDatafeedSubscriptionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDescribeSpotDatafeedSubscriptionQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeSpotDatafeedSubscriptionVersionEnum version;
    public GetDescribeSpotDatafeedSubscriptionQueryParams withVersion(GetDescribeSpotDatafeedSubscriptionVersionEnum version) {
        this.version = version;
        return this;
    }
}