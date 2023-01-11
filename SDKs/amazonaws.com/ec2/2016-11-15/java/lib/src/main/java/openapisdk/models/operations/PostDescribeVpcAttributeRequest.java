package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeVpcAttributeRequest {
    public PostDescribeVpcAttributeQueryParams queryParams;
    public PostDescribeVpcAttributeRequest withQueryParams(PostDescribeVpcAttributeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeVpcAttributeHeaders headers;
    public PostDescribeVpcAttributeRequest withHeaders(PostDescribeVpcAttributeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeVpcAttributeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}