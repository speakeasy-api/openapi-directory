package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyEventSubscriptionRequest {
    public PostModifyEventSubscriptionQueryParams queryParams;
    public PostModifyEventSubscriptionRequest withQueryParams(PostModifyEventSubscriptionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyEventSubscriptionHeaders headers;
    public PostModifyEventSubscriptionRequest withHeaders(PostModifyEventSubscriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyEventSubscriptionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}