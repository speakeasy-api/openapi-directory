package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateClientVpnEndpointRequest {
    public PostCreateClientVpnEndpointQueryParams queryParams;
    public PostCreateClientVpnEndpointRequest withQueryParams(PostCreateClientVpnEndpointQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateClientVpnEndpointHeaders headers;
    public PostCreateClientVpnEndpointRequest withHeaders(PostCreateClientVpnEndpointHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateClientVpnEndpointRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}