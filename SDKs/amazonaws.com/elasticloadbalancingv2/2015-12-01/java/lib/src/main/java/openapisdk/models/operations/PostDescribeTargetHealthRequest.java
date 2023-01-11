package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTargetHealthRequest {
    public PostDescribeTargetHealthQueryParams queryParams;
    public PostDescribeTargetHealthRequest withQueryParams(PostDescribeTargetHealthQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeTargetHealthHeaders headers;
    public PostDescribeTargetHealthRequest withHeaders(PostDescribeTargetHealthHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeTargetHealthRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}