package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostChangeMessageVisibilityRequest {
    public PostChangeMessageVisibilityQueryParams queryParams;
    public PostChangeMessageVisibilityRequest withQueryParams(PostChangeMessageVisibilityQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostChangeMessageVisibilityHeaders headers;
    public PostChangeMessageVisibilityRequest withHeaders(PostChangeMessageVisibilityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostChangeMessageVisibilityRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}