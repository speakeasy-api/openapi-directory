package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateAccountPasswordPolicyRequest {
    public PostUpdateAccountPasswordPolicyQueryParams queryParams;
    public PostUpdateAccountPasswordPolicyRequest withQueryParams(PostUpdateAccountPasswordPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateAccountPasswordPolicyHeaders headers;
    public PostUpdateAccountPasswordPolicyRequest withHeaders(PostUpdateAccountPasswordPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateAccountPasswordPolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}