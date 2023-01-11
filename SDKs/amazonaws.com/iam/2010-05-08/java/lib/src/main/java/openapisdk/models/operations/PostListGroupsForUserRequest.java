package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListGroupsForUserRequest {
    public PostListGroupsForUserQueryParams queryParams;
    public PostListGroupsForUserRequest withQueryParams(PostListGroupsForUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListGroupsForUserHeaders headers;
    public PostListGroupsForUserRequest withHeaders(PostListGroupsForUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListGroupsForUserRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}