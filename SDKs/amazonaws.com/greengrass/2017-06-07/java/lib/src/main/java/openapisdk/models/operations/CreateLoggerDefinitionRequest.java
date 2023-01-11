package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLoggerDefinitionRequest {
    public CreateLoggerDefinitionHeaders headers;
    public CreateLoggerDefinitionRequest withHeaders(CreateLoggerDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateLoggerDefinitionRequestBody request;
    public CreateLoggerDefinitionRequest withRequest(CreateLoggerDefinitionRequestBody request) {
        this.request = request;
        return this;
    }
}