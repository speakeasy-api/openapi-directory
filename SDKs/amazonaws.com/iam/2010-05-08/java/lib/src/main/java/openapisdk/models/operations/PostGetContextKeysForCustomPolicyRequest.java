package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetContextKeysForCustomPolicyRequest {
    public PostGetContextKeysForCustomPolicyQueryParams queryParams;
    public PostGetContextKeysForCustomPolicyRequest withQueryParams(PostGetContextKeysForCustomPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetContextKeysForCustomPolicyHeaders headers;
    public PostGetContextKeysForCustomPolicyRequest withHeaders(PostGetContextKeysForCustomPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetContextKeysForCustomPolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}