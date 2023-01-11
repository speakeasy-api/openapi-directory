package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDbProxyEndpointRequest {
    public PostCreateDbProxyEndpointQueryParams queryParams;
    public PostCreateDbProxyEndpointRequest withQueryParams(PostCreateDbProxyEndpointQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateDbProxyEndpointHeaders headers;
    public PostCreateDbProxyEndpointRequest withHeaders(PostCreateDbProxyEndpointHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateDbProxyEndpointRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}