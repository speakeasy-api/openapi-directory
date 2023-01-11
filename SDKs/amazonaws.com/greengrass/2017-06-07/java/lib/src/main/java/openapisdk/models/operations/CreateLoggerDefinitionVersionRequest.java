package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLoggerDefinitionVersionRequest {
    public CreateLoggerDefinitionVersionPathParams pathParams;
    public CreateLoggerDefinitionVersionRequest withPathParams(CreateLoggerDefinitionVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateLoggerDefinitionVersionHeaders headers;
    public CreateLoggerDefinitionVersionRequest withHeaders(CreateLoggerDefinitionVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateLoggerDefinitionVersionRequestBody request;
    public CreateLoggerDefinitionVersionRequest withRequest(CreateLoggerDefinitionVersionRequestBody request) {
        this.request = request;
        return this;
    }
}