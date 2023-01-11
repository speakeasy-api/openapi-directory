package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateSpotDatafeedSubscriptionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateSpotDatafeedSubscriptionActionEnum action;
    public GetCreateSpotDatafeedSubscriptionQueryParams withAction(GetCreateSpotDatafeedSubscriptionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Bucket")
    public String bucket;
    public GetCreateSpotDatafeedSubscriptionQueryParams withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetCreateSpotDatafeedSubscriptionQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Prefix")
    public String prefix;
    public GetCreateSpotDatafeedSubscriptionQueryParams withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateSpotDatafeedSubscriptionVersionEnum version;
    public GetCreateSpotDatafeedSubscriptionQueryParams withVersion(GetCreateSpotDatafeedSubscriptionVersionEnum version) {
        this.version = version;
        return this;
    }
}