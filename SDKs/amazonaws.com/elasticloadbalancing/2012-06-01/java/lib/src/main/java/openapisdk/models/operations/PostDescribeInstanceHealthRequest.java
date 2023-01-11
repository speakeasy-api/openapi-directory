package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeInstanceHealthRequest {
    public PostDescribeInstanceHealthQueryParams queryParams;
    public PostDescribeInstanceHealthRequest withQueryParams(PostDescribeInstanceHealthQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeInstanceHealthHeaders headers;
    public PostDescribeInstanceHealthRequest withHeaders(PostDescribeInstanceHealthHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeInstanceHealthRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}