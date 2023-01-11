package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeNatGatewaysRequest {
    public PostDescribeNatGatewaysQueryParams queryParams;
    public PostDescribeNatGatewaysRequest withQueryParams(PostDescribeNatGatewaysQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeNatGatewaysHeaders headers;
    public PostDescribeNatGatewaysRequest withHeaders(PostDescribeNatGatewaysHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeNatGatewaysRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}