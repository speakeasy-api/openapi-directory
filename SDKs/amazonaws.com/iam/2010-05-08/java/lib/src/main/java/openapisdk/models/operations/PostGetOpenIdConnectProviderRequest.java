package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetOpenIdConnectProviderRequest {
    public PostGetOpenIdConnectProviderQueryParams queryParams;
    public PostGetOpenIdConnectProviderRequest withQueryParams(PostGetOpenIdConnectProviderQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetOpenIdConnectProviderHeaders headers;
    public PostGetOpenIdConnectProviderRequest withHeaders(PostGetOpenIdConnectProviderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetOpenIdConnectProviderRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}