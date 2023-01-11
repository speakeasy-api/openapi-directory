package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutLifecyclePolicyRequest {
    public PutLifecyclePolicyHeaders headers;
    public PutLifecyclePolicyRequest withHeaders(PutLifecyclePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutLifecyclePolicyInput request;
    public PutLifecyclePolicyRequest withRequest(openapisdk.models.shared.PutLifecyclePolicyInput request) {
        this.request = request;
        return this;
    }
}