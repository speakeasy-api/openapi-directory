package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSpotDatafeedSubscriptionRequest {
    public PostDescribeSpotDatafeedSubscriptionQueryParams queryParams;
    public PostDescribeSpotDatafeedSubscriptionRequest withQueryParams(PostDescribeSpotDatafeedSubscriptionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeSpotDatafeedSubscriptionHeaders headers;
    public PostDescribeSpotDatafeedSubscriptionRequest withHeaders(PostDescribeSpotDatafeedSubscriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeSpotDatafeedSubscriptionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}