package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutWarmPoolRequest {
    public PostPutWarmPoolQueryParams queryParams;
    public PostPutWarmPoolRequest withQueryParams(PostPutWarmPoolQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostPutWarmPoolHeaders headers;
    public PostPutWarmPoolRequest withHeaders(PostPutWarmPoolHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostPutWarmPoolRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}