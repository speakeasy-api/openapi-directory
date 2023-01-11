package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LookupPolicyRequest {
    public LookupPolicyQueryParams queryParams;
    public LookupPolicyRequest withQueryParams(LookupPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LookupPolicyHeaders headers;
    public LookupPolicyRequest withHeaders(LookupPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public LookupPolicyRequestBody request;
    public LookupPolicyRequest withRequest(LookupPolicyRequestBody request) {
        this.request = request;
        return this;
    }
}