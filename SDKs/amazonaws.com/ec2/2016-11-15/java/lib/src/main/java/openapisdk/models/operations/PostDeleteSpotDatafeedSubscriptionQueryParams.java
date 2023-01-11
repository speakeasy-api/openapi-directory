package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteSpotDatafeedSubscriptionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteSpotDatafeedSubscriptionActionEnum action;
    public PostDeleteSpotDatafeedSubscriptionQueryParams withAction(PostDeleteSpotDatafeedSubscriptionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteSpotDatafeedSubscriptionVersionEnum version;
    public PostDeleteSpotDatafeedSubscriptionQueryParams withVersion(PostDeleteSpotDatafeedSubscriptionVersionEnum version) {
        this.version = version;
        return this;
    }
}