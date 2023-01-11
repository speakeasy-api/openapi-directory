package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPipelineDefinitionRequest {
    public GetPipelineDefinitionHeaders headers;
    public GetPipelineDefinitionRequest withHeaders(GetPipelineDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetPipelineDefinitionInput request;
    public GetPipelineDefinitionRequest withRequest(openapisdk.models.shared.GetPipelineDefinitionInput request) {
        this.request = request;
        return this;
    }
}