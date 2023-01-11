package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateComputeEnvironmentRequest {
    public UpdateComputeEnvironmentHeaders headers;
    public UpdateComputeEnvironmentRequest withHeaders(UpdateComputeEnvironmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateComputeEnvironmentRequestBody request;
    public UpdateComputeEnvironmentRequest withRequest(UpdateComputeEnvironmentRequestBody request) {
        this.request = request;
        return this;
    }
}