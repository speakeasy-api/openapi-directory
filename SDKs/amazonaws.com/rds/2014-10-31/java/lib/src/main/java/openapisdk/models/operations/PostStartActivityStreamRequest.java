package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStartActivityStreamRequest {
    public PostStartActivityStreamQueryParams queryParams;
    public PostStartActivityStreamRequest withQueryParams(PostStartActivityStreamQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostStartActivityStreamHeaders headers;
    public PostStartActivityStreamRequest withHeaders(PostStartActivityStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostStartActivityStreamRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}