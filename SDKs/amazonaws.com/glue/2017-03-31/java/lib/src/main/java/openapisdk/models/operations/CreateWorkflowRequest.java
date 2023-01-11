package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWorkflowRequest {
    public CreateWorkflowHeaders headers;
    public CreateWorkflowRequest withHeaders(CreateWorkflowHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateWorkflowRequest request;
    public CreateWorkflowRequest withRequest(openapisdk.models.shared.CreateWorkflowRequest request) {
        this.request = request;
        return this;
    }
}