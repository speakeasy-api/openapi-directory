package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteSpotDatafeedSubscriptionRequest {
    public PostDeleteSpotDatafeedSubscriptionQueryParams queryParams;
    public PostDeleteSpotDatafeedSubscriptionRequest withQueryParams(PostDeleteSpotDatafeedSubscriptionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteSpotDatafeedSubscriptionHeaders headers;
    public PostDeleteSpotDatafeedSubscriptionRequest withHeaders(PostDeleteSpotDatafeedSubscriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteSpotDatafeedSubscriptionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}