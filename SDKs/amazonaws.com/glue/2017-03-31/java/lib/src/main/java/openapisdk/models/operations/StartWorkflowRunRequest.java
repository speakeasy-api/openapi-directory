package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartWorkflowRunRequest {
    public StartWorkflowRunHeaders headers;
    public StartWorkflowRunRequest withHeaders(StartWorkflowRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartWorkflowRunRequest request;
    public StartWorkflowRunRequest withRequest(openapisdk.models.shared.StartWorkflowRunRequest request) {
        this.request = request;
        return this;
    }
}