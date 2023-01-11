package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCancelInstanceRefreshRequest {
    public PostCancelInstanceRefreshQueryParams queryParams;
    public PostCancelInstanceRefreshRequest withQueryParams(PostCancelInstanceRefreshQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCancelInstanceRefreshHeaders headers;
    public PostCancelInstanceRefreshRequest withHeaders(PostCancelInstanceRefreshHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCancelInstanceRefreshRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}