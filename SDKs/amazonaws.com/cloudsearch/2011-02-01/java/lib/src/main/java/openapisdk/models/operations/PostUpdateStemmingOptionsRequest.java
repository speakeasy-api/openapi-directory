package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateStemmingOptionsRequest {
    public PostUpdateStemmingOptionsQueryParams queryParams;
    public PostUpdateStemmingOptionsRequest withQueryParams(PostUpdateStemmingOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateStemmingOptionsHeaders headers;
    public PostUpdateStemmingOptionsRequest withHeaders(PostUpdateStemmingOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateStemmingOptionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}