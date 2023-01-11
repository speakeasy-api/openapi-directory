package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendWorkflowStepStateRequest {
    public SendWorkflowStepStateHeaders headers;
    public SendWorkflowStepStateRequest withHeaders(SendWorkflowStepStateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SendWorkflowStepStateRequest request;
    public SendWorkflowStepStateRequest withRequest(openapisdk.models.shared.SendWorkflowStepStateRequest request) {
        this.request = request;
        return this;
    }
}