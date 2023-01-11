package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTransitGatewayConnectPeerRequest {
    public PostCreateTransitGatewayConnectPeerQueryParams queryParams;
    public PostCreateTransitGatewayConnectPeerRequest withQueryParams(PostCreateTransitGatewayConnectPeerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateTransitGatewayConnectPeerHeaders headers;
    public PostCreateTransitGatewayConnectPeerRequest withHeaders(PostCreateTransitGatewayConnectPeerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateTransitGatewayConnectPeerRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}