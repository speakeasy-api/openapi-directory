package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopWorkflowRunRequest {
    public StopWorkflowRunHeaders headers;
    public StopWorkflowRunRequest withHeaders(StopWorkflowRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopWorkflowRunRequest request;
    public StopWorkflowRunRequest withRequest(openapisdk.models.shared.StopWorkflowRunRequest request) {
        this.request = request;
        return this;
    }
}