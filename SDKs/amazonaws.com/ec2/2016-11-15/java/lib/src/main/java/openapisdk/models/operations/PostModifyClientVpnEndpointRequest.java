package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyClientVpnEndpointRequest {
    public PostModifyClientVpnEndpointQueryParams queryParams;
    public PostModifyClientVpnEndpointRequest withQueryParams(PostModifyClientVpnEndpointQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyClientVpnEndpointHeaders headers;
    public PostModifyClientVpnEndpointRequest withHeaders(PostModifyClientVpnEndpointHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyClientVpnEndpointRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}