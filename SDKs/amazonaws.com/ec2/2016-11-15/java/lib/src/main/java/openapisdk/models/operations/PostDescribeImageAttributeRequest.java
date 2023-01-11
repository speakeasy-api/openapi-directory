package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeImageAttributeRequest {
    public PostDescribeImageAttributeQueryParams queryParams;
    public PostDescribeImageAttributeRequest withQueryParams(PostDescribeImageAttributeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeImageAttributeHeaders headers;
    public PostDescribeImageAttributeRequest withHeaders(PostDescribeImageAttributeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeImageAttributeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}