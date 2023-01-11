package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartLifecyclePolicyPreviewRequest {
    public StartLifecyclePolicyPreviewHeaders headers;
    public StartLifecyclePolicyPreviewRequest withHeaders(StartLifecyclePolicyPreviewHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartLifecyclePolicyPreviewRequest request;
    public StartLifecyclePolicyPreviewRequest withRequest(openapisdk.models.shared.StartLifecyclePolicyPreviewRequest request) {
        this.request = request;
        return this;
    }
}