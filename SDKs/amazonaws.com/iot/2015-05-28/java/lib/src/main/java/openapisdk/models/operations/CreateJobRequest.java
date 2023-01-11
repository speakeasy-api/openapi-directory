package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateJobRequest {
    public CreateJobPathParams pathParams;
    public CreateJobRequest withPathParams(CreateJobPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateJobHeaders headers;
    public CreateJobRequest withHeaders(CreateJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateJobRequestBody request;
    public CreateJobRequest withRequest(CreateJobRequestBody request) {
        this.request = request;
        return this;
    }
}