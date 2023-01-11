package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTransitGatewayRequest {
    public PostCreateTransitGatewayQueryParams queryParams;
    public PostCreateTransitGatewayRequest withQueryParams(PostCreateTransitGatewayQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateTransitGatewayHeaders headers;
    public PostCreateTransitGatewayRequest withHeaders(PostCreateTransitGatewayHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateTransitGatewayRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}