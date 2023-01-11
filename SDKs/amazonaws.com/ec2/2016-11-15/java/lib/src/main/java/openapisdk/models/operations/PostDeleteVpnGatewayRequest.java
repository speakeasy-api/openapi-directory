package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteVpnGatewayRequest {
    public PostDeleteVpnGatewayQueryParams queryParams;
    public PostDeleteVpnGatewayRequest withQueryParams(PostDeleteVpnGatewayQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteVpnGatewayHeaders headers;
    public PostDeleteVpnGatewayRequest withHeaders(PostDeleteVpnGatewayHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteVpnGatewayRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}