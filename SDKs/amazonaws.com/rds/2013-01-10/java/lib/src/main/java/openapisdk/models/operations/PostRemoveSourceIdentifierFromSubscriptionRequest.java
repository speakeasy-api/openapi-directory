package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRemoveSourceIdentifierFromSubscriptionRequest {
    public PostRemoveSourceIdentifierFromSubscriptionQueryParams queryParams;
    public PostRemoveSourceIdentifierFromSubscriptionRequest withQueryParams(PostRemoveSourceIdentifierFromSubscriptionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRemoveSourceIdentifierFromSubscriptionHeaders headers;
    public PostRemoveSourceIdentifierFromSubscriptionRequest withHeaders(PostRemoveSourceIdentifierFromSubscriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRemoveSourceIdentifierFromSubscriptionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}