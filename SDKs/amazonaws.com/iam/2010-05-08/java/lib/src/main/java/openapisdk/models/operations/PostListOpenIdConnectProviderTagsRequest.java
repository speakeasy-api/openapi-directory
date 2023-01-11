package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListOpenIdConnectProviderTagsRequest {
    public PostListOpenIdConnectProviderTagsQueryParams queryParams;
    public PostListOpenIdConnectProviderTagsRequest withQueryParams(PostListOpenIdConnectProviderTagsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListOpenIdConnectProviderTagsHeaders headers;
    public PostListOpenIdConnectProviderTagsRequest withHeaders(PostListOpenIdConnectProviderTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListOpenIdConnectProviderTagsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}