package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetContextKeysForPrincipalPolicyRequest {
    public PostGetContextKeysForPrincipalPolicyQueryParams queryParams;
    public PostGetContextKeysForPrincipalPolicyRequest withQueryParams(PostGetContextKeysForPrincipalPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetContextKeysForPrincipalPolicyHeaders headers;
    public PostGetContextKeysForPrincipalPolicyRequest withHeaders(PostGetContextKeysForPrincipalPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetContextKeysForPrincipalPolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}