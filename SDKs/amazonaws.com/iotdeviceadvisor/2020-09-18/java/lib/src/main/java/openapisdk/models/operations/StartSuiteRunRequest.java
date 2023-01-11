package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartSuiteRunRequest {
    public StartSuiteRunPathParams pathParams;
    public StartSuiteRunRequest withPathParams(StartSuiteRunPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StartSuiteRunHeaders headers;
    public StartSuiteRunRequest withHeaders(StartSuiteRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StartSuiteRunRequestBody request;
    public StartSuiteRunRequest withRequest(StartSuiteRunRequestBody request) {
        this.request = request;
        return this;
    }
}