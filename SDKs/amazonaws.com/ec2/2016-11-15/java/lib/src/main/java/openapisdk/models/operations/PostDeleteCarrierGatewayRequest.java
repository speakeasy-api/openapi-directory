package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteCarrierGatewayRequest {
    public PostDeleteCarrierGatewayQueryParams queryParams;
    public PostDeleteCarrierGatewayRequest withQueryParams(PostDeleteCarrierGatewayQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteCarrierGatewayHeaders headers;
    public PostDeleteCarrierGatewayRequest withHeaders(PostDeleteCarrierGatewayHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteCarrierGatewayRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}