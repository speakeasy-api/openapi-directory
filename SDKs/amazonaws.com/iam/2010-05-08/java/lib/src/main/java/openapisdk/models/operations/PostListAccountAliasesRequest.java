package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListAccountAliasesRequest {
    public PostListAccountAliasesQueryParams queryParams;
    public PostListAccountAliasesRequest withQueryParams(PostListAccountAliasesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListAccountAliasesHeaders headers;
    public PostListAccountAliasesRequest withHeaders(PostListAccountAliasesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListAccountAliasesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}