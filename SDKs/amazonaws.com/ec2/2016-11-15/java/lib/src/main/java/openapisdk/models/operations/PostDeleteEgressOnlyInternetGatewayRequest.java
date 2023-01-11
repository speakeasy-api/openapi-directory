package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteEgressOnlyInternetGatewayRequest {
    public PostDeleteEgressOnlyInternetGatewayQueryParams queryParams;
    public PostDeleteEgressOnlyInternetGatewayRequest withQueryParams(PostDeleteEgressOnlyInternetGatewayQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteEgressOnlyInternetGatewayHeaders headers;
    public PostDeleteEgressOnlyInternetGatewayRequest withHeaders(PostDeleteEgressOnlyInternetGatewayHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteEgressOnlyInternetGatewayRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}