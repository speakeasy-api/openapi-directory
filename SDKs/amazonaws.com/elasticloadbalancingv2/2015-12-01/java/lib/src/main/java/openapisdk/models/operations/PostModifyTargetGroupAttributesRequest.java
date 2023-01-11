package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyTargetGroupAttributesRequest {
    public PostModifyTargetGroupAttributesQueryParams queryParams;
    public PostModifyTargetGroupAttributesRequest withQueryParams(PostModifyTargetGroupAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyTargetGroupAttributesHeaders headers;
    public PostModifyTargetGroupAttributesRequest withHeaders(PostModifyTargetGroupAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyTargetGroupAttributesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}