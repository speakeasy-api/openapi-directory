package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWorkflowRequest {
    public DeleteWorkflowHeaders headers;
    public DeleteWorkflowRequest withHeaders(DeleteWorkflowHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteWorkflowRequest request;
    public DeleteWorkflowRequest withRequest(openapisdk.models.shared.DeleteWorkflowRequest request) {
        this.request = request;
        return this;
    }
}