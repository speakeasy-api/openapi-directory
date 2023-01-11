package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteNatGatewayRequest {
    public PostDeleteNatGatewayQueryParams queryParams;
    public PostDeleteNatGatewayRequest withQueryParams(PostDeleteNatGatewayQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteNatGatewayHeaders headers;
    public PostDeleteNatGatewayRequest withHeaders(PostDeleteNatGatewayHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteNatGatewayRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}