package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFunctionDefinitionVersionRequest {
    public CreateFunctionDefinitionVersionPathParams pathParams;
    public CreateFunctionDefinitionVersionRequest withPathParams(CreateFunctionDefinitionVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateFunctionDefinitionVersionHeaders headers;
    public CreateFunctionDefinitionVersionRequest withHeaders(CreateFunctionDefinitionVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateFunctionDefinitionVersionRequestBody request;
    public CreateFunctionDefinitionVersionRequest withRequest(CreateFunctionDefinitionVersionRequestBody request) {
        this.request = request;
        return this;
    }
}