package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTargetGroupRequest {
    public PostDeleteTargetGroupQueryParams queryParams;
    public PostDeleteTargetGroupRequest withQueryParams(PostDeleteTargetGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteTargetGroupHeaders headers;
    public PostDeleteTargetGroupRequest withHeaders(PostDeleteTargetGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteTargetGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}