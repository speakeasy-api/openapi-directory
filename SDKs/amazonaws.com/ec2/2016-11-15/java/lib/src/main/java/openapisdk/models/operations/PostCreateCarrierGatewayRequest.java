package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateCarrierGatewayRequest {
    public PostCreateCarrierGatewayQueryParams queryParams;
    public PostCreateCarrierGatewayRequest withQueryParams(PostCreateCarrierGatewayQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateCarrierGatewayHeaders headers;
    public PostCreateCarrierGatewayRequest withHeaders(PostCreateCarrierGatewayHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateCarrierGatewayRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}