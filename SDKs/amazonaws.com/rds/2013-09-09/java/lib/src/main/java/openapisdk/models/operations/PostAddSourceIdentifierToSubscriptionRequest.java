package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAddSourceIdentifierToSubscriptionRequest {
    public PostAddSourceIdentifierToSubscriptionQueryParams queryParams;
    public PostAddSourceIdentifierToSubscriptionRequest withQueryParams(PostAddSourceIdentifierToSubscriptionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAddSourceIdentifierToSubscriptionHeaders headers;
    public PostAddSourceIdentifierToSubscriptionRequest withHeaders(PostAddSourceIdentifierToSubscriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAddSourceIdentifierToSubscriptionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}