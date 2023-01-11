package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateExperimentTemplateRequest {
    public CreateExperimentTemplateHeaders headers;
    public CreateExperimentTemplateRequest withHeaders(CreateExperimentTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateExperimentTemplateRequestBody request;
    public CreateExperimentTemplateRequest withRequest(CreateExperimentTemplateRequestBody request) {
        this.request = request;
        return this;
    }
}