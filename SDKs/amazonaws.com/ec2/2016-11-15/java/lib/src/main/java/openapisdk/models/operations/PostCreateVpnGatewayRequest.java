package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateVpnGatewayRequest {
    public PostCreateVpnGatewayQueryParams queryParams;
    public PostCreateVpnGatewayRequest withQueryParams(PostCreateVpnGatewayQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateVpnGatewayHeaders headers;
    public PostCreateVpnGatewayRequest withHeaders(PostCreateVpnGatewayHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateVpnGatewayRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}