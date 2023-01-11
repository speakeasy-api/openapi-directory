package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSuiteDefinitionRequest {
    public CreateSuiteDefinitionHeaders headers;
    public CreateSuiteDefinitionRequest withHeaders(CreateSuiteDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateSuiteDefinitionRequestBody request;
    public CreateSuiteDefinitionRequest withRequest(CreateSuiteDefinitionRequestBody request) {
        this.request = request;
        return this;
    }
}