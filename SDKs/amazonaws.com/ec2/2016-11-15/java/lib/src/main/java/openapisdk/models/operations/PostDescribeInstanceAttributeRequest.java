package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeInstanceAttributeRequest {
    public PostDescribeInstanceAttributeQueryParams queryParams;
    public PostDescribeInstanceAttributeRequest withQueryParams(PostDescribeInstanceAttributeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeInstanceAttributeHeaders headers;
    public PostDescribeInstanceAttributeRequest withHeaders(PostDescribeInstanceAttributeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeInstanceAttributeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}