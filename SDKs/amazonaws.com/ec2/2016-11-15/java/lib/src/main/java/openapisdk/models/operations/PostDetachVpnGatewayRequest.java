package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDetachVpnGatewayRequest {
    public PostDetachVpnGatewayQueryParams queryParams;
    public PostDetachVpnGatewayRequest withQueryParams(PostDetachVpnGatewayQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDetachVpnGatewayHeaders headers;
    public PostDetachVpnGatewayRequest withHeaders(PostDetachVpnGatewayHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDetachVpnGatewayRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}