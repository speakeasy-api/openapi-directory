package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteDbProxyEndpointRequest {
    public PostDeleteDbProxyEndpointQueryParams queryParams;
    public PostDeleteDbProxyEndpointRequest withQueryParams(PostDeleteDbProxyEndpointQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteDbProxyEndpointHeaders headers;
    public PostDeleteDbProxyEndpointRequest withHeaders(PostDeleteDbProxyEndpointHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteDbProxyEndpointRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}