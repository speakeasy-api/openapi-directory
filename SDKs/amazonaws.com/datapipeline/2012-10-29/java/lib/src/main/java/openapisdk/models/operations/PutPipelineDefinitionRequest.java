package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPipelineDefinitionRequest {
    public PutPipelineDefinitionHeaders headers;
    public PutPipelineDefinitionRequest withHeaders(PutPipelineDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutPipelineDefinitionInput request;
    public PutPipelineDefinitionRequest withRequest(openapisdk.models.shared.PutPipelineDefinitionInput request) {
        this.request = request;
        return this;
    }
}