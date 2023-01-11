package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListInstanceProfilesForRoleRequest {
    public PostListInstanceProfilesForRoleQueryParams queryParams;
    public PostListInstanceProfilesForRoleRequest withQueryParams(PostListInstanceProfilesForRoleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListInstanceProfilesForRoleHeaders headers;
    public PostListInstanceProfilesForRoleRequest withHeaders(PostListInstanceProfilesForRoleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListInstanceProfilesForRoleRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}