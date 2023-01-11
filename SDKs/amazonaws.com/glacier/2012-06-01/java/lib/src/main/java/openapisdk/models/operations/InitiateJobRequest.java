package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InitiateJobRequest {
    public InitiateJobPathParams pathParams;
    public InitiateJobRequest withPathParams(InitiateJobPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public InitiateJobHeaders headers;
    public InitiateJobRequest withHeaders(InitiateJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public InitiateJobRequestBody request;
    public InitiateJobRequest withRequest(InitiateJobRequestBody request) {
        this.request = request;
        return this;
    }
}