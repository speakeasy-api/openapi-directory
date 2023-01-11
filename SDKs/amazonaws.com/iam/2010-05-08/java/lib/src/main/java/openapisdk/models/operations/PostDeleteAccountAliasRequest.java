package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteAccountAliasRequest {
    public PostDeleteAccountAliasQueryParams queryParams;
    public PostDeleteAccountAliasRequest withQueryParams(PostDeleteAccountAliasQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteAccountAliasHeaders headers;
    public PostDeleteAccountAliasRequest withHeaders(PostDeleteAccountAliasHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteAccountAliasRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}