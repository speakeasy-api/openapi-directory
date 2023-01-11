package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTestFailoverRequest {
    public PostTestFailoverQueryParams queryParams;
    public PostTestFailoverRequest withQueryParams(PostTestFailoverQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostTestFailoverHeaders headers;
    public PostTestFailoverRequest withHeaders(PostTestFailoverHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostTestFailoverRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}