package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListServiceSpecificCredentialsRequest {
    public PostListServiceSpecificCredentialsQueryParams queryParams;
    public PostListServiceSpecificCredentialsRequest withQueryParams(PostListServiceSpecificCredentialsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListServiceSpecificCredentialsHeaders headers;
    public PostListServiceSpecificCredentialsRequest withHeaders(PostListServiceSpecificCredentialsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListServiceSpecificCredentialsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}