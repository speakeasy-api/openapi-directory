package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateComputeEnvironmentRequest {
    public CreateComputeEnvironmentHeaders headers;
    public CreateComputeEnvironmentRequest withHeaders(CreateComputeEnvironmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateComputeEnvironmentRequestBody request;
    public CreateComputeEnvironmentRequest withRequest(CreateComputeEnvironmentRequestBody request) {
        this.request = request;
        return this;
    }
}