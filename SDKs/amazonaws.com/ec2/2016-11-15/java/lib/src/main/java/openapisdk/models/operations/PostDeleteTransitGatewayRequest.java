package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTransitGatewayRequest {
    public PostDeleteTransitGatewayQueryParams queryParams;
    public PostDeleteTransitGatewayRequest withQueryParams(PostDeleteTransitGatewayQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteTransitGatewayHeaders headers;
    public PostDeleteTransitGatewayRequest withHeaders(PostDeleteTransitGatewayHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteTransitGatewayRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}