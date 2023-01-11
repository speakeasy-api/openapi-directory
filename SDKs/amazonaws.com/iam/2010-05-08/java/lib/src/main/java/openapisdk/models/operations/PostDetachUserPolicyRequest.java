package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDetachUserPolicyRequest {
    public PostDetachUserPolicyQueryParams queryParams;
    public PostDetachUserPolicyRequest withQueryParams(PostDetachUserPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDetachUserPolicyHeaders headers;
    public PostDetachUserPolicyRequest withHeaders(PostDetachUserPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDetachUserPolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}