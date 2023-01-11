package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateExperimentTemplateRequest {
    public UpdateExperimentTemplatePathParams pathParams;
    public UpdateExperimentTemplateRequest withPathParams(UpdateExperimentTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateExperimentTemplateHeaders headers;
    public UpdateExperimentTemplateRequest withHeaders(UpdateExperimentTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateExperimentTemplateRequestBody request;
    public UpdateExperimentTemplateRequest withRequest(UpdateExperimentTemplateRequestBody request) {
        this.request = request;
        return this;
    }
}