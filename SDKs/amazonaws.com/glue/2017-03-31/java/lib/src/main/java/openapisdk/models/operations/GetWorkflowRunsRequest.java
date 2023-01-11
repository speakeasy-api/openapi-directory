package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkflowRunsRequest {
    public GetWorkflowRunsQueryParams queryParams;
    public GetWorkflowRunsRequest withQueryParams(GetWorkflowRunsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetWorkflowRunsHeaders headers;
    public GetWorkflowRunsRequest withHeaders(GetWorkflowRunsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetWorkflowRunsRequest request;
    public GetWorkflowRunsRequest withRequest(openapisdk.models.shared.GetWorkflowRunsRequest request) {
        this.request = request;
        return this;
    }
}