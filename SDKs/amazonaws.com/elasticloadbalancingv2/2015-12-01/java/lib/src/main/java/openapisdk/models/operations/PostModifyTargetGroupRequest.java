package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyTargetGroupRequest {
    public PostModifyTargetGroupQueryParams queryParams;
    public PostModifyTargetGroupRequest withQueryParams(PostModifyTargetGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyTargetGroupHeaders headers;
    public PostModifyTargetGroupRequest withHeaders(PostModifyTargetGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyTargetGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}