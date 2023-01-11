package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateSpotDatafeedSubscriptionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateSpotDatafeedSubscriptionActionEnum action;
    public PostCreateSpotDatafeedSubscriptionQueryParams withAction(PostCreateSpotDatafeedSubscriptionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateSpotDatafeedSubscriptionVersionEnum version;
    public PostCreateSpotDatafeedSubscriptionQueryParams withVersion(PostCreateSpotDatafeedSubscriptionVersionEnum version) {
        this.version = version;
        return this;
    }
}