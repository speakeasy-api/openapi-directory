package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyTransitGatewayRequest {
    public PostModifyTransitGatewayQueryParams queryParams;
    public PostModifyTransitGatewayRequest withQueryParams(PostModifyTransitGatewayQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyTransitGatewayHeaders headers;
    public PostModifyTransitGatewayRequest withHeaders(PostModifyTransitGatewayHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyTransitGatewayRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}