package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RequestCancelWorkflowExecutionRequest {
    public RequestCancelWorkflowExecutionHeaders headers;
    public RequestCancelWorkflowExecutionRequest withHeaders(RequestCancelWorkflowExecutionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RequestCancelWorkflowExecutionInput request;
    public RequestCancelWorkflowExecutionRequest withRequest(openapisdk.models.shared.RequestCancelWorkflowExecutionInput request) {
        this.request = request;
        return this;
    }
}