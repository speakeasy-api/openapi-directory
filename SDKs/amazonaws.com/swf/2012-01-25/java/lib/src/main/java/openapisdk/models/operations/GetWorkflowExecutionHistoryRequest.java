package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkflowExecutionHistoryRequest {
    public GetWorkflowExecutionHistoryQueryParams queryParams;
    public GetWorkflowExecutionHistoryRequest withQueryParams(GetWorkflowExecutionHistoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetWorkflowExecutionHistoryHeaders headers;
    public GetWorkflowExecutionHistoryRequest withHeaders(GetWorkflowExecutionHistoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetWorkflowExecutionHistoryInput request;
    public GetWorkflowExecutionHistoryRequest withRequest(openapisdk.models.shared.GetWorkflowExecutionHistoryInput request) {
        this.request = request;
        return this;
    }
}