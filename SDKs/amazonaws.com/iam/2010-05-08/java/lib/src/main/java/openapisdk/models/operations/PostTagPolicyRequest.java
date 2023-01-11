package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTagPolicyRequest {
    public PostTagPolicyQueryParams queryParams;
    public PostTagPolicyRequest withQueryParams(PostTagPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostTagPolicyHeaders headers;
    public PostTagPolicyRequest withHeaders(PostTagPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostTagPolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}