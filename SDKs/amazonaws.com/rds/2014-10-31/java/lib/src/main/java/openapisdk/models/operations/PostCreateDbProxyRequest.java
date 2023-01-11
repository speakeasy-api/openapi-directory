package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDbProxyRequest {
    public PostCreateDbProxyQueryParams queryParams;
    public PostCreateDbProxyRequest withQueryParams(PostCreateDbProxyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateDbProxyHeaders headers;
    public PostCreateDbProxyRequest withHeaders(PostCreateDbProxyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateDbProxyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}