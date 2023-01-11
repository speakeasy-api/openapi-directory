package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutResourcePolicyRequest {
    public PutResourcePolicyHeaders headers;
    public PutResourcePolicyRequest withHeaders(PutResourcePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutResourcePolicyRequestBody request;
    public PutResourcePolicyRequest withRequest(PutResourcePolicyRequestBody request) {
        this.request = request;
        return this;
    }
}