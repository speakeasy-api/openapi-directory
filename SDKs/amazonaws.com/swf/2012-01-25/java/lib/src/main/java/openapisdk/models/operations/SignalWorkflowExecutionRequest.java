package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SignalWorkflowExecutionRequest {
    public SignalWorkflowExecutionHeaders headers;
    public SignalWorkflowExecutionRequest withHeaders(SignalWorkflowExecutionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SignalWorkflowExecutionInput request;
    public SignalWorkflowExecutionRequest withRequest(openapisdk.models.shared.SignalWorkflowExecutionInput request) {
        this.request = request;
        return this;
    }
}