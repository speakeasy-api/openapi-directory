package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStartInstanceRefreshRequest {
    public PostStartInstanceRefreshQueryParams queryParams;
    public PostStartInstanceRefreshRequest withQueryParams(PostStartInstanceRefreshQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostStartInstanceRefreshHeaders headers;
    public PostStartInstanceRefreshRequest withHeaders(PostStartInstanceRefreshHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostStartInstanceRefreshRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}