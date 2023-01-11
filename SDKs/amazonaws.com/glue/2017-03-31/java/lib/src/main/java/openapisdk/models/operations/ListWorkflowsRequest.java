package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWorkflowsRequest {
    public ListWorkflowsQueryParams queryParams;
    public ListWorkflowsRequest withQueryParams(ListWorkflowsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListWorkflowsHeaders headers;
    public ListWorkflowsRequest withHeaders(ListWorkflowsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListWorkflowsRequest request;
    public ListWorkflowsRequest withRequest(openapisdk.models.shared.ListWorkflowsRequest request) {
        this.request = request;
        return this;
    }
}