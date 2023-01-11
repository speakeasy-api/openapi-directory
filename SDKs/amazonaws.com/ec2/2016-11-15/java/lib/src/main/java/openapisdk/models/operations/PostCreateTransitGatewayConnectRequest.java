package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTransitGatewayConnectRequest {
    public PostCreateTransitGatewayConnectQueryParams queryParams;
    public PostCreateTransitGatewayConnectRequest withQueryParams(PostCreateTransitGatewayConnectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateTransitGatewayConnectHeaders headers;
    public PostCreateTransitGatewayConnectRequest withHeaders(PostCreateTransitGatewayConnectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateTransitGatewayConnectRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}