package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteComputeEnvironmentRequest {
    public DeleteComputeEnvironmentHeaders headers;
    public DeleteComputeEnvironmentRequest withHeaders(DeleteComputeEnvironmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteComputeEnvironmentRequestBody request;
    public DeleteComputeEnvironmentRequest withRequest(DeleteComputeEnvironmentRequestBody request) {
        this.request = request;
        return this;
    }
}