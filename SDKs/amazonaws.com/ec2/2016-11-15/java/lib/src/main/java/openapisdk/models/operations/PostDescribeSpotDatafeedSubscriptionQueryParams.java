package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSpotDatafeedSubscriptionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeSpotDatafeedSubscriptionActionEnum action;
    public PostDescribeSpotDatafeedSubscriptionQueryParams withAction(PostDescribeSpotDatafeedSubscriptionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeSpotDatafeedSubscriptionVersionEnum version;
    public PostDescribeSpotDatafeedSubscriptionQueryParams withVersion(PostDescribeSpotDatafeedSubscriptionVersionEnum version) {
        this.version = version;
        return this;
    }
}