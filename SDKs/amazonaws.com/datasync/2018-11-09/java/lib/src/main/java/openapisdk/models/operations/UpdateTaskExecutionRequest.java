package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTaskExecutionRequest {
    public UpdateTaskExecutionHeaders headers;
    public UpdateTaskExecutionRequest withHeaders(UpdateTaskExecutionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateTaskExecutionRequest request;
    public UpdateTaskExecutionRequest withRequest(openapisdk.models.shared.UpdateTaskExecutionRequest request) {
        this.request = request;
        return this;
    }
}