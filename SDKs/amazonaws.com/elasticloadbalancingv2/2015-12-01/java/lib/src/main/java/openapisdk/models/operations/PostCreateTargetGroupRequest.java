package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTargetGroupRequest {
    public PostCreateTargetGroupQueryParams queryParams;
    public PostCreateTargetGroupRequest withQueryParams(PostCreateTargetGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateTargetGroupHeaders headers;
    public PostCreateTargetGroupRequest withHeaders(PostCreateTargetGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateTargetGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}