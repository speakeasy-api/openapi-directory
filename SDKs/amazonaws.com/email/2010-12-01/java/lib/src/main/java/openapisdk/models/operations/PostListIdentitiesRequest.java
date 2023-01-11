package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListIdentitiesRequest {
    public PostListIdentitiesQueryParams queryParams;
    public PostListIdentitiesRequest withQueryParams(PostListIdentitiesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListIdentitiesHeaders headers;
    public PostListIdentitiesRequest withHeaders(PostListIdentitiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListIdentitiesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}