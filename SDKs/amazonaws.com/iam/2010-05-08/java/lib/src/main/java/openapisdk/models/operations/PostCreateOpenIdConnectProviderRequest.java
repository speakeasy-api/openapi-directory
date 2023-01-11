package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateOpenIdConnectProviderRequest {
    public PostCreateOpenIdConnectProviderQueryParams queryParams;
    public PostCreateOpenIdConnectProviderRequest withQueryParams(PostCreateOpenIdConnectProviderQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateOpenIdConnectProviderHeaders headers;
    public PostCreateOpenIdConnectProviderRequest withHeaders(PostCreateOpenIdConnectProviderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateOpenIdConnectProviderRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}