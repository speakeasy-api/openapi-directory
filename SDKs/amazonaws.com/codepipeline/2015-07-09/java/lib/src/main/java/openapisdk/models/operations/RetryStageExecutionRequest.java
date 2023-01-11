package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetryStageExecutionRequest {
    public RetryStageExecutionHeaders headers;
    public RetryStageExecutionRequest withHeaders(RetryStageExecutionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RetryStageExecutionInput request;
    public RetryStageExecutionRequest withRequest(openapisdk.models.shared.RetryStageExecutionInput request) {
        this.request = request;
        return this;
    }
}