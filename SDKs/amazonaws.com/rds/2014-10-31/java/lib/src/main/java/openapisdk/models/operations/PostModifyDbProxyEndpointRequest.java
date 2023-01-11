package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyDbProxyEndpointRequest {
    public PostModifyDbProxyEndpointQueryParams queryParams;
    public PostModifyDbProxyEndpointRequest withQueryParams(PostModifyDbProxyEndpointQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyDbProxyEndpointHeaders headers;
    public PostModifyDbProxyEndpointRequest withHeaders(PostModifyDbProxyEndpointHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyDbProxyEndpointRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}