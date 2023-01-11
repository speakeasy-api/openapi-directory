package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeInternetGatewaysRequest {
    public PostDescribeInternetGatewaysQueryParams queryParams;
    public PostDescribeInternetGatewaysRequest withQueryParams(PostDescribeInternetGatewaysQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeInternetGatewaysHeaders headers;
    public PostDescribeInternetGatewaysRequest withHeaders(PostDescribeInternetGatewaysHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeInternetGatewaysRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}