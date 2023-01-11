package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFunctionDefinitionRequest {
    public CreateFunctionDefinitionHeaders headers;
    public CreateFunctionDefinitionRequest withHeaders(CreateFunctionDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateFunctionDefinitionRequestBody request;
    public CreateFunctionDefinitionRequest withRequest(CreateFunctionDefinitionRequestBody request) {
        this.request = request;
        return this;
    }
}