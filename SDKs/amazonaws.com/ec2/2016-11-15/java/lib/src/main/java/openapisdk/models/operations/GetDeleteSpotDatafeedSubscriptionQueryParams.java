package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteSpotDatafeedSubscriptionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteSpotDatafeedSubscriptionActionEnum action;
    public GetDeleteSpotDatafeedSubscriptionQueryParams withAction(GetDeleteSpotDatafeedSubscriptionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteSpotDatafeedSubscriptionQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteSpotDatafeedSubscriptionVersionEnum version;
    public GetDeleteSpotDatafeedSubscriptionQueryParams withVersion(GetDeleteSpotDatafeedSubscriptionVersionEnum version) {
        this.version = version;
        return this;
    }
}