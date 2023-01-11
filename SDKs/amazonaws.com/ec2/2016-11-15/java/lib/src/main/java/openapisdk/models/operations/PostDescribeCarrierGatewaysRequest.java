package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeCarrierGatewaysRequest {
    public PostDescribeCarrierGatewaysQueryParams queryParams;
    public PostDescribeCarrierGatewaysRequest withQueryParams(PostDescribeCarrierGatewaysQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeCarrierGatewaysHeaders headers;
    public PostDescribeCarrierGatewaysRequest withHeaders(PostDescribeCarrierGatewaysHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeCarrierGatewaysRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}