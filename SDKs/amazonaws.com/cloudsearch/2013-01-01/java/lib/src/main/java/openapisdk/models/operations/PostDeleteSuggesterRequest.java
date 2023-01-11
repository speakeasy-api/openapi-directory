package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteSuggesterRequest {
    public PostDeleteSuggesterQueryParams queryParams;
    public PostDeleteSuggesterRequest withQueryParams(PostDeleteSuggesterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteSuggesterHeaders headers;
    public PostDeleteSuggesterRequest withHeaders(PostDeleteSuggesterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteSuggesterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}