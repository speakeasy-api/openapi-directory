package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResumeWorkflowRunRequest {
    public ResumeWorkflowRunHeaders headers;
    public ResumeWorkflowRunRequest withHeaders(ResumeWorkflowRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResumeWorkflowRunRequest request;
    public ResumeWorkflowRunRequest withRequest(openapisdk.models.shared.ResumeWorkflowRunRequest request) {
        this.request = request;
        return this;
    }
}