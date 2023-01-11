package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartJobRequest {
    public StartJobPathParams pathParams;
    public StartJobRequest withPathParams(StartJobPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StartJobHeaders headers;
    public StartJobRequest withHeaders(StartJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StartJobRequestBody request;
    public StartJobRequest withRequest(StartJobRequestBody request) {
        this.request = request;
        return this;
    }
}