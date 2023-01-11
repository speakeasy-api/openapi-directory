package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLifecyclePolicyRequest {
    public GetLifecyclePolicyHeaders headers;
    public GetLifecyclePolicyRequest withHeaders(GetLifecyclePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetLifecyclePolicyRequest request;
    public GetLifecyclePolicyRequest withRequest(openapisdk.models.shared.GetLifecyclePolicyRequest request) {
        this.request = request;
        return this;
    }
}