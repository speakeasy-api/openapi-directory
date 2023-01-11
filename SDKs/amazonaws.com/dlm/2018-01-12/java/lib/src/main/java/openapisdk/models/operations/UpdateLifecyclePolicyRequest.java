package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLifecyclePolicyRequest {
    public UpdateLifecyclePolicyPathParams pathParams;
    public UpdateLifecyclePolicyRequest withPathParams(UpdateLifecyclePolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateLifecyclePolicyHeaders headers;
    public UpdateLifecyclePolicyRequest withHeaders(UpdateLifecyclePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateLifecyclePolicyRequestBody request;
    public UpdateLifecyclePolicyRequest withRequest(UpdateLifecyclePolicyRequestBody request) {
        this.request = request;
        return this;
    }
}