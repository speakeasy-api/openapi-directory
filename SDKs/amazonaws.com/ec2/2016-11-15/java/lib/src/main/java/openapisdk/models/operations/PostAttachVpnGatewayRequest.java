package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAttachVpnGatewayRequest {
    public PostAttachVpnGatewayQueryParams queryParams;
    public PostAttachVpnGatewayRequest withQueryParams(PostAttachVpnGatewayQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAttachVpnGatewayHeaders headers;
    public PostAttachVpnGatewayRequest withHeaders(PostAttachVpnGatewayHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAttachVpnGatewayRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}