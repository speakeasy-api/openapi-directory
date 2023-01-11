package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTransitGatewayConnectRequest {
    public PostDeleteTransitGatewayConnectQueryParams queryParams;
    public PostDeleteTransitGatewayConnectRequest withQueryParams(PostDeleteTransitGatewayConnectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteTransitGatewayConnectHeaders headers;
    public PostDeleteTransitGatewayConnectRequest withHeaders(PostDeleteTransitGatewayConnectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteTransitGatewayConnectRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}