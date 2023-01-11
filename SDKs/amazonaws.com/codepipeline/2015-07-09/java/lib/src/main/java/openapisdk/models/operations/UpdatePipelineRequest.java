package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePipelineRequest {
    public UpdatePipelineHeaders headers;
    public UpdatePipelineRequest withHeaders(UpdatePipelineHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdatePipelineInput request;
    public UpdatePipelineRequest withRequest(openapisdk.models.shared.UpdatePipelineInput request) {
        this.request = request;
        return this;
    }
}