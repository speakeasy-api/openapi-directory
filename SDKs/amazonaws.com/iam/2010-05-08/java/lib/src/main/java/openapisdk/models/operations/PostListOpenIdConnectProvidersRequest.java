package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListOpenIdConnectProvidersRequest {
    public PostListOpenIdConnectProvidersQueryParams queryParams;
    public PostListOpenIdConnectProvidersRequest withQueryParams(PostListOpenIdConnectProvidersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListOpenIdConnectProvidersHeaders headers;
    public PostListOpenIdConnectProvidersRequest withHeaders(PostListOpenIdConnectProvidersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListOpenIdConnectProvidersRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}