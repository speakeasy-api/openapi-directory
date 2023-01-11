package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLocalGatewaysRequest {
    public PostDescribeLocalGatewaysQueryParams queryParams;
    public PostDescribeLocalGatewaysRequest withQueryParams(PostDescribeLocalGatewaysQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeLocalGatewaysHeaders headers;
    public PostDescribeLocalGatewaysRequest withHeaders(PostDescribeLocalGatewaysHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeLocalGatewaysRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}