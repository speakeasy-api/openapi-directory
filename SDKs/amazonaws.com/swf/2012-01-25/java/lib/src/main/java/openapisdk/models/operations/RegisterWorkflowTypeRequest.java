package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterWorkflowTypeRequest {
    public RegisterWorkflowTypeHeaders headers;
    public RegisterWorkflowTypeRequest withHeaders(RegisterWorkflowTypeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterWorkflowTypeInput request;
    public RegisterWorkflowTypeRequest withRequest(openapisdk.models.shared.RegisterWorkflowTypeInput request) {
        this.request = request;
        return this;
    }
}