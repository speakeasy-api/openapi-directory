package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateEventSubscriptionRequest {
    public PostCreateEventSubscriptionQueryParams queryParams;
    public PostCreateEventSubscriptionRequest withQueryParams(PostCreateEventSubscriptionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateEventSubscriptionHeaders headers;
    public PostCreateEventSubscriptionRequest withHeaders(PostCreateEventSubscriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateEventSubscriptionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}