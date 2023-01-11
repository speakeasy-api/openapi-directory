package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServicePipelineRequest {
    public UpdateServicePipelineHeaders headers;
    public UpdateServicePipelineRequest withHeaders(UpdateServicePipelineHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateServicePipelineInput request;
    public UpdateServicePipelineRequest withRequest(openapisdk.models.shared.UpdateServicePipelineInput request) {
        this.request = request;
        return this;
    }
}