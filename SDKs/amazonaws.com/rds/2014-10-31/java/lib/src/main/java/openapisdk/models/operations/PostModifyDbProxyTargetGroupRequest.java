package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyDbProxyTargetGroupRequest {
    public PostModifyDbProxyTargetGroupQueryParams queryParams;
    public PostModifyDbProxyTargetGroupRequest withQueryParams(PostModifyDbProxyTargetGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyDbProxyTargetGroupHeaders headers;
    public PostModifyDbProxyTargetGroupRequest withHeaders(PostModifyDbProxyTargetGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyDbProxyTargetGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}