package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUntagOpenIdConnectProviderRequest {
    public PostUntagOpenIdConnectProviderQueryParams queryParams;
    public PostUntagOpenIdConnectProviderRequest withQueryParams(PostUntagOpenIdConnectProviderQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUntagOpenIdConnectProviderHeaders headers;
    public PostUntagOpenIdConnectProviderRequest withHeaders(PostUntagOpenIdConnectProviderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUntagOpenIdConnectProviderRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}