package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListInstanceProfilesRequest {
    public PostListInstanceProfilesQueryParams queryParams;
    public PostListInstanceProfilesRequest withQueryParams(PostListInstanceProfilesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListInstanceProfilesHeaders headers;
    public PostListInstanceProfilesRequest withHeaders(PostListInstanceProfilesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListInstanceProfilesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}