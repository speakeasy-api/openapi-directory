package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePipelineRequest {
    public DeletePipelineHeaders headers;
    public DeletePipelineRequest withHeaders(DeletePipelineHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeletePipelineInput request;
    public DeletePipelineRequest withRequest(openapisdk.models.shared.DeletePipelineInput request) {
        this.request = request;
        return this;
    }
}