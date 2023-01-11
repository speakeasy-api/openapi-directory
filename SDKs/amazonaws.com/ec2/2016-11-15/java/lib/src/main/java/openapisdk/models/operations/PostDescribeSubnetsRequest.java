package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSubnetsRequest {
    public PostDescribeSubnetsQueryParams queryParams;
    public PostDescribeSubnetsRequest withQueryParams(PostDescribeSubnetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeSubnetsHeaders headers;
    public PostDescribeSubnetsRequest withHeaders(PostDescribeSubnetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeSubnetsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}