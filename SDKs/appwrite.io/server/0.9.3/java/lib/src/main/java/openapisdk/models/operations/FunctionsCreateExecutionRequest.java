package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FunctionsCreateExecutionRequest {
    public FunctionsCreateExecutionPathParams pathParams;
    public FunctionsCreateExecutionRequest withPathParams(FunctionsCreateExecutionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public FunctionsCreateExecutionRequestBody request;
    public FunctionsCreateExecutionRequest withRequest(FunctionsCreateExecutionRequestBody request) {
        this.request = request;
        return this;
    }
    public FunctionsCreateExecutionSecurity security;
    public FunctionsCreateExecutionRequest withSecurity(FunctionsCreateExecutionSecurity security) {
        this.security = security;
        return this;
    }
}