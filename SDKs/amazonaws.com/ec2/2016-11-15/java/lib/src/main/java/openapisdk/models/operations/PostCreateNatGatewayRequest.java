package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateNatGatewayRequest {
    public PostCreateNatGatewayQueryParams queryParams;
    public PostCreateNatGatewayRequest withQueryParams(PostCreateNatGatewayQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateNatGatewayHeaders headers;
    public PostCreateNatGatewayRequest withHeaders(PostCreateNatGatewayHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateNatGatewayRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}