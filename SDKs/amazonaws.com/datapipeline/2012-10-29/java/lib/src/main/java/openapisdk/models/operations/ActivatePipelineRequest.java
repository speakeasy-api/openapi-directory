package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivatePipelineRequest {
    public ActivatePipelineHeaders headers;
    public ActivatePipelineRequest withHeaders(ActivatePipelineHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ActivatePipelineInput request;
    public ActivatePipelineRequest withRequest(openapisdk.models.shared.ActivatePipelineInput request) {
        this.request = request;
        return this;
    }
}