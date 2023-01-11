package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartTaskExecutionRequest {
    public StartTaskExecutionHeaders headers;
    public StartTaskExecutionRequest withHeaders(StartTaskExecutionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartTaskExecutionRequest request;
    public StartTaskExecutionRequest withRequest(openapisdk.models.shared.StartTaskExecutionRequest request) {
        this.request = request;
        return this;
    }
}