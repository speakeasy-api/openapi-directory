package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetachPolicyRequest {
    public DetachPolicyHeaders headers;
    public DetachPolicyRequest withHeaders(DetachPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DetachPolicyRequestBody request;
    public DetachPolicyRequest withRequest(DetachPolicyRequestBody request) {
        this.request = request;
        return this;
    }
}