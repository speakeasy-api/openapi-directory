package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostChangeMessageVisibilityBatchRequest {
    public PostChangeMessageVisibilityBatchQueryParams queryParams;
    public PostChangeMessageVisibilityBatchRequest withQueryParams(PostChangeMessageVisibilityBatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostChangeMessageVisibilityBatchHeaders headers;
    public PostChangeMessageVisibilityBatchRequest withHeaders(PostChangeMessageVisibilityBatchHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostChangeMessageVisibilityBatchRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}