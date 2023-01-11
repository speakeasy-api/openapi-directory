package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLoggerDefinitionRequest {
    public UpdateLoggerDefinitionPathParams pathParams;
    public UpdateLoggerDefinitionRequest withPathParams(UpdateLoggerDefinitionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateLoggerDefinitionHeaders headers;
    public UpdateLoggerDefinitionRequest withHeaders(UpdateLoggerDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateLoggerDefinitionRequestBody request;
    public UpdateLoggerDefinitionRequest withRequest(UpdateLoggerDefinitionRequestBody request) {
        this.request = request;
        return this;
    }
}