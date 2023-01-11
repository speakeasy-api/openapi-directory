package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartWorkflowExecutionRequest {
    public StartWorkflowExecutionHeaders headers;
    public StartWorkflowExecutionRequest withHeaders(StartWorkflowExecutionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartWorkflowExecutionInput request;
    public StartWorkflowExecutionRequest withRequest(openapisdk.models.shared.StartWorkflowExecutionInput request) {
        this.request = request;
        return this;
    }
}