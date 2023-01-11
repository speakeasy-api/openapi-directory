package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkflowRunRequest {
    public GetWorkflowRunHeaders headers;
    public GetWorkflowRunRequest withHeaders(GetWorkflowRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetWorkflowRunRequest request;
    public GetWorkflowRunRequest withRequest(openapisdk.models.shared.GetWorkflowRunRequest request) {
        this.request = request;
        return this;
    }
}