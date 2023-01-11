package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListSamlProvidersRequest {
    public PostListSamlProvidersQueryParams queryParams;
    public PostListSamlProvidersRequest withQueryParams(PostListSamlProvidersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListSamlProvidersHeaders headers;
    public PostListSamlProvidersRequest withHeaders(PostListSamlProvidersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListSamlProvidersRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}