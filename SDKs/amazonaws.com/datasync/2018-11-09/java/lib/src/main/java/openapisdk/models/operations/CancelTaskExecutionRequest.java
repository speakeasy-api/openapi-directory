package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelTaskExecutionRequest {
    public CancelTaskExecutionHeaders headers;
    public CancelTaskExecutionRequest withHeaders(CancelTaskExecutionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CancelTaskExecutionRequest request;
    public CancelTaskExecutionRequest withRequest(openapisdk.models.shared.CancelTaskExecutionRequest request) {
        this.request = request;
        return this;
    }
}