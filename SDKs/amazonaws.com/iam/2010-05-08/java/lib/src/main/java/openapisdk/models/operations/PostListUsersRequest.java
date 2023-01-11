package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListUsersRequest {
    public PostListUsersQueryParams queryParams;
    public PostListUsersRequest withQueryParams(PostListUsersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListUsersHeaders headers;
    public PostListUsersRequest withHeaders(PostListUsersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListUsersRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}