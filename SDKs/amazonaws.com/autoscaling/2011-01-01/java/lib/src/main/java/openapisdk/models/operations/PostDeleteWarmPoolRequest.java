package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteWarmPoolRequest {
    public PostDeleteWarmPoolQueryParams queryParams;
    public PostDeleteWarmPoolRequest withQueryParams(PostDeleteWarmPoolQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteWarmPoolHeaders headers;
    public PostDeleteWarmPoolRequest withHeaders(PostDeleteWarmPoolHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteWarmPoolRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}