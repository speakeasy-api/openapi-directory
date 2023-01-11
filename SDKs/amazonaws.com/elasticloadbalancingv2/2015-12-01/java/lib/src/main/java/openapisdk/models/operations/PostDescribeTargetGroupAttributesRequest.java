package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTargetGroupAttributesRequest {
    public PostDescribeTargetGroupAttributesQueryParams queryParams;
    public PostDescribeTargetGroupAttributesRequest withQueryParams(PostDescribeTargetGroupAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeTargetGroupAttributesHeaders headers;
    public PostDescribeTargetGroupAttributesRequest withHeaders(PostDescribeTargetGroupAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeTargetGroupAttributesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}