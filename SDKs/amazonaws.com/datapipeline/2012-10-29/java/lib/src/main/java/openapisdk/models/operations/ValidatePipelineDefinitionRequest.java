package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ValidatePipelineDefinitionRequest {
    public ValidatePipelineDefinitionHeaders headers;
    public ValidatePipelineDefinitionRequest withHeaders(ValidatePipelineDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ValidatePipelineDefinitionInput request;
    public ValidatePipelineDefinitionRequest withRequest(openapisdk.models.shared.ValidatePipelineDefinitionInput request) {
        this.request = request;
        return this;
    }
}