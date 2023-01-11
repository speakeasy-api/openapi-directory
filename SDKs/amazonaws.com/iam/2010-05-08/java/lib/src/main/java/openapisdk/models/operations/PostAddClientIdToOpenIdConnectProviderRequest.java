package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAddClientIdToOpenIdConnectProviderRequest {
    public PostAddClientIdToOpenIdConnectProviderQueryParams queryParams;
    public PostAddClientIdToOpenIdConnectProviderRequest withQueryParams(PostAddClientIdToOpenIdConnectProviderQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAddClientIdToOpenIdConnectProviderHeaders headers;
    public PostAddClientIdToOpenIdConnectProviderRequest withHeaders(PostAddClientIdToOpenIdConnectProviderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAddClientIdToOpenIdConnectProviderRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}