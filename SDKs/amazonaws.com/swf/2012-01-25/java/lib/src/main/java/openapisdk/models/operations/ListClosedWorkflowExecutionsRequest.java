package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListClosedWorkflowExecutionsRequest {
    public ListClosedWorkflowExecutionsQueryParams queryParams;
    public ListClosedWorkflowExecutionsRequest withQueryParams(ListClosedWorkflowExecutionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListClosedWorkflowExecutionsHeaders headers;
    public ListClosedWorkflowExecutionsRequest withHeaders(ListClosedWorkflowExecutionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListClosedWorkflowExecutionsInput request;
    public ListClosedWorkflowExecutionsRequest withRequest(openapisdk.models.shared.ListClosedWorkflowExecutionsInput request) {
        this.request = request;
        return this;
    }
}