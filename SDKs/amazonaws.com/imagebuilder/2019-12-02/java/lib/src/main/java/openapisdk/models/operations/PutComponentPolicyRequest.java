package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutComponentPolicyRequest {
    public PutComponentPolicyHeaders headers;
    public PutComponentPolicyRequest withHeaders(PutComponentPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutComponentPolicyRequestBody request;
    public PutComponentPolicyRequest withRequest(PutComponentPolicyRequestBody request) {
        this.request = request;
        return this;
    }
}