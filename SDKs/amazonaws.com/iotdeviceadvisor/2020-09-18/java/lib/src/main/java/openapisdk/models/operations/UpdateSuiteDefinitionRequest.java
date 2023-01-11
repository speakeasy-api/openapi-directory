package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSuiteDefinitionRequest {
    public UpdateSuiteDefinitionPathParams pathParams;
    public UpdateSuiteDefinitionRequest withPathParams(UpdateSuiteDefinitionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateSuiteDefinitionHeaders headers;
    public UpdateSuiteDefinitionRequest withHeaders(UpdateSuiteDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateSuiteDefinitionRequestBody request;
    public UpdateSuiteDefinitionRequest withRequest(UpdateSuiteDefinitionRequestBody request) {
        this.request = request;
        return this;
    }
}