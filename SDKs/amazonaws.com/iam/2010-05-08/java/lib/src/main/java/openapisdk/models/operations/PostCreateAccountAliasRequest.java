package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateAccountAliasRequest {
    public PostCreateAccountAliasQueryParams queryParams;
    public PostCreateAccountAliasRequest withQueryParams(PostCreateAccountAliasQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateAccountAliasHeaders headers;
    public PostCreateAccountAliasRequest withHeaders(PostCreateAccountAliasHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateAccountAliasRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}