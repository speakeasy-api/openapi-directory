package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteEventSubscriptionRequest {
    public PostDeleteEventSubscriptionQueryParams queryParams;
    public PostDeleteEventSubscriptionRequest withQueryParams(PostDeleteEventSubscriptionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteEventSubscriptionHeaders headers;
    public PostDeleteEventSubscriptionRequest withHeaders(PostDeleteEventSubscriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteEventSubscriptionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}