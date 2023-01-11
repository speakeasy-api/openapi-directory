package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateCustomerGatewayRequest {
    public PostCreateCustomerGatewayQueryParams queryParams;
    public PostCreateCustomerGatewayRequest withQueryParams(PostCreateCustomerGatewayQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateCustomerGatewayHeaders headers;
    public PostCreateCustomerGatewayRequest withHeaders(PostCreateCustomerGatewayHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateCustomerGatewayRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}