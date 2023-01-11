package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeVpcsRequest {
    public PostDescribeVpcsQueryParams queryParams;
    public PostDescribeVpcsRequest withQueryParams(PostDescribeVpcsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeVpcsHeaders headers;
    public PostDescribeVpcsRequest withHeaders(PostDescribeVpcsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeVpcsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}