package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRejectDataShareRequest {
    public PostRejectDataShareQueryParams queryParams;
    public PostRejectDataShareRequest withQueryParams(PostRejectDataShareQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRejectDataShareHeaders headers;
    public PostRejectDataShareRequest withHeaders(PostRejectDataShareHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRejectDataShareRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}