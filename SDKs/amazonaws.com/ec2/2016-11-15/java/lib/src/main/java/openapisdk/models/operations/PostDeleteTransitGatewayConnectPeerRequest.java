package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTransitGatewayConnectPeerRequest {
    public PostDeleteTransitGatewayConnectPeerQueryParams queryParams;
    public PostDeleteTransitGatewayConnectPeerRequest withQueryParams(PostDeleteTransitGatewayConnectPeerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteTransitGatewayConnectPeerHeaders headers;
    public PostDeleteTransitGatewayConnectPeerRequest withHeaders(PostDeleteTransitGatewayConnectPeerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteTransitGatewayConnectPeerRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}