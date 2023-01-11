package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteDbProxyRequest {
    public PostDeleteDbProxyQueryParams queryParams;
    public PostDeleteDbProxyRequest withQueryParams(PostDeleteDbProxyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteDbProxyHeaders headers;
    public PostDeleteDbProxyRequest withHeaders(PostDeleteDbProxyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteDbProxyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}