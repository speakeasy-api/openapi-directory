package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLifecyclePolicyRequest {
    public CreateLifecyclePolicyHeaders headers;
    public CreateLifecyclePolicyRequest withHeaders(CreateLifecyclePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateLifecyclePolicyRequestBody request;
    public CreateLifecyclePolicyRequest withRequest(CreateLifecyclePolicyRequestBody request) {
        this.request = request;
        return this;
    }
}