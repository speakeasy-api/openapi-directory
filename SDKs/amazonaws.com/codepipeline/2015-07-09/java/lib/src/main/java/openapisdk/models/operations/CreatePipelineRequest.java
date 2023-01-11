package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePipelineRequest {
    public CreatePipelineHeaders headers;
    public CreatePipelineRequest withHeaders(CreatePipelineHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreatePipelineInput request;
    public CreatePipelineRequest withRequest(openapisdk.models.shared.CreatePipelineInput request) {
        this.request = request;
        return this;
    }
}