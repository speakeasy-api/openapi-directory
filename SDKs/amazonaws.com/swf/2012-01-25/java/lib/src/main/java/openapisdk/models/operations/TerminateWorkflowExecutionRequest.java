package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TerminateWorkflowExecutionRequest {
    public TerminateWorkflowExecutionHeaders headers;
    public TerminateWorkflowExecutionRequest withHeaders(TerminateWorkflowExecutionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TerminateWorkflowExecutionInput request;
    public TerminateWorkflowExecutionRequest withRequest(openapisdk.models.shared.TerminateWorkflowExecutionInput request) {
        this.request = request;
        return this;
    }
}