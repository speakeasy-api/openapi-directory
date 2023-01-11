package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLifecyclePolicyRequest {
    public DeleteLifecyclePolicyHeaders headers;
    public DeleteLifecyclePolicyRequest withHeaders(DeleteLifecyclePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteLifecyclePolicyRequest request;
    public DeleteLifecyclePolicyRequest withRequest(openapisdk.models.shared.DeleteLifecyclePolicyRequest request) {
        this.request = request;
        return this;
    }
}