package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetWorkflowsRequest {
    public BatchGetWorkflowsHeaders headers;
    public BatchGetWorkflowsRequest withHeaders(BatchGetWorkflowsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetWorkflowsRequest request;
    public BatchGetWorkflowsRequest withRequest(openapisdk.models.shared.BatchGetWorkflowsRequest request) {
        this.request = request;
        return this;
    }
}