package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListSshPublicKeysRequest {
    public PostListSshPublicKeysQueryParams queryParams;
    public PostListSshPublicKeysRequest withQueryParams(PostListSshPublicKeysQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListSshPublicKeysHeaders headers;
    public PostListSshPublicKeysRequest withHeaders(PostListSshPublicKeysHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListSshPublicKeysRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}