package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostIndexDocumentsRequest {
    public PostIndexDocumentsQueryParams queryParams;
    public PostIndexDocumentsRequest withQueryParams(PostIndexDocumentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostIndexDocumentsHeaders headers;
    public PostIndexDocumentsRequest withHeaders(PostIndexDocumentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostIndexDocumentsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}