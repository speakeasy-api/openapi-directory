package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeEgressOnlyInternetGatewaysRequest {
    public PostDescribeEgressOnlyInternetGatewaysQueryParams queryParams;
    public PostDescribeEgressOnlyInternetGatewaysRequest withQueryParams(PostDescribeEgressOnlyInternetGatewaysQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeEgressOnlyInternetGatewaysHeaders headers;
    public PostDescribeEgressOnlyInternetGatewaysRequest withHeaders(PostDescribeEgressOnlyInternetGatewaysHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeEgressOnlyInternetGatewaysRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}