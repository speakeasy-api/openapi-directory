package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyDbProxyRequest {
    public PostModifyDbProxyQueryParams queryParams;
    public PostModifyDbProxyRequest withQueryParams(PostModifyDbProxyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyDbProxyHeaders headers;
    public PostModifyDbProxyRequest withHeaders(PostModifyDbProxyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyDbProxyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}