package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeactivatePipelineRequest {
    public DeactivatePipelineHeaders headers;
    public DeactivatePipelineRequest withHeaders(DeactivatePipelineHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeactivatePipelineInput request;
    public DeactivatePipelineRequest withRequest(openapisdk.models.shared.DeactivatePipelineInput request) {
        this.request = request;
        return this;
    }
}