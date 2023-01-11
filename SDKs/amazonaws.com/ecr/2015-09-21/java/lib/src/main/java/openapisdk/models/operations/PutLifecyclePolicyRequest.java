package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutLifecyclePolicyRequest {
    public PutLifecyclePolicyHeaders headers;
    public PutLifecyclePolicyRequest withHeaders(PutLifecyclePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutLifecyclePolicyRequest request;
    public PutLifecyclePolicyRequest withRequest(openapisdk.models.shared.PutLifecyclePolicyRequest request) {
        this.request = request;
        return this;
    }
}