package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTagOpenIdConnectProviderRequest {
    public PostTagOpenIdConnectProviderQueryParams queryParams;
    public PostTagOpenIdConnectProviderRequest withQueryParams(PostTagOpenIdConnectProviderQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostTagOpenIdConnectProviderHeaders headers;
    public PostTagOpenIdConnectProviderRequest withHeaders(PostTagOpenIdConnectProviderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostTagOpenIdConnectProviderRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}