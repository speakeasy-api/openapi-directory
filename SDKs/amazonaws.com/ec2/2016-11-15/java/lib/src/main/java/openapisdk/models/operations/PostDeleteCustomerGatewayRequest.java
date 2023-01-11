package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteCustomerGatewayRequest {
    public PostDeleteCustomerGatewayQueryParams queryParams;
    public PostDeleteCustomerGatewayRequest withQueryParams(PostDeleteCustomerGatewayQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteCustomerGatewayHeaders headers;
    public PostDeleteCustomerGatewayRequest withHeaders(PostDeleteCustomerGatewayHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteCustomerGatewayRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}