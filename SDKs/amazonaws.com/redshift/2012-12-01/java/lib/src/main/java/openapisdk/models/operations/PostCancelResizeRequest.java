package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCancelResizeRequest {
    public PostCancelResizeQueryParams queryParams;
    public PostCancelResizeRequest withQueryParams(PostCancelResizeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCancelResizeHeaders headers;
    public PostCancelResizeRequest withHeaders(PostCancelResizeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCancelResizeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}