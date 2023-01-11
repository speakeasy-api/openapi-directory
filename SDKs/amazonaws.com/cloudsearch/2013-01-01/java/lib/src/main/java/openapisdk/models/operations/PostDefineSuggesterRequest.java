package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDefineSuggesterRequest {
    public PostDefineSuggesterQueryParams queryParams;
    public PostDefineSuggesterRequest withQueryParams(PostDefineSuggesterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDefineSuggesterHeaders headers;
    public PostDefineSuggesterRequest withHeaders(PostDefineSuggesterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDefineSuggesterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}