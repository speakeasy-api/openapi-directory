package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeCustomerGatewaysRequest {
    public PostDescribeCustomerGatewaysQueryParams queryParams;
    public PostDescribeCustomerGatewaysRequest withQueryParams(PostDescribeCustomerGatewaysQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeCustomerGatewaysHeaders headers;
    public PostDescribeCustomerGatewaysRequest withHeaders(PostDescribeCustomerGatewaysHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeCustomerGatewaysRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}