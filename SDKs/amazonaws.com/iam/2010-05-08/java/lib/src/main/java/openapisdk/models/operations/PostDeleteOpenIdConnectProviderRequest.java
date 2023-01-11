package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteOpenIdConnectProviderRequest {
    public PostDeleteOpenIdConnectProviderQueryParams queryParams;
    public PostDeleteOpenIdConnectProviderRequest withQueryParams(PostDeleteOpenIdConnectProviderQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteOpenIdConnectProviderHeaders headers;
    public PostDeleteOpenIdConnectProviderRequest withHeaders(PostDeleteOpenIdConnectProviderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteOpenIdConnectProviderRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}