package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListEntitiesForPolicyRequest {
    public PostListEntitiesForPolicyQueryParams queryParams;
    public PostListEntitiesForPolicyRequest withQueryParams(PostListEntitiesForPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListEntitiesForPolicyHeaders headers;
    public PostListEntitiesForPolicyRequest withHeaders(PostListEntitiesForPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListEntitiesForPolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}