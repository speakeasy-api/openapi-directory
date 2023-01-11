package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateSpotDatafeedSubscriptionRequest {
    public PostCreateSpotDatafeedSubscriptionQueryParams queryParams;
    public PostCreateSpotDatafeedSubscriptionRequest withQueryParams(PostCreateSpotDatafeedSubscriptionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateSpotDatafeedSubscriptionHeaders headers;
    public PostCreateSpotDatafeedSubscriptionRequest withHeaders(PostCreateSpotDatafeedSubscriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateSpotDatafeedSubscriptionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}