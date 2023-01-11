package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWorkflowRequest {
    public UpdateWorkflowHeaders headers;
    public UpdateWorkflowRequest withHeaders(UpdateWorkflowHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateWorkflowRequest request;
    public UpdateWorkflowRequest withRequest(openapisdk.models.shared.UpdateWorkflowRequest request) {
        this.request = request;
        return this;
    }
}