package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListOpenWorkflowExecutionsRequest {
    public ListOpenWorkflowExecutionsQueryParams queryParams;
    public ListOpenWorkflowExecutionsRequest withQueryParams(ListOpenWorkflowExecutionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListOpenWorkflowExecutionsHeaders headers;
    public ListOpenWorkflowExecutionsRequest withHeaders(ListOpenWorkflowExecutionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListOpenWorkflowExecutionsInput request;
    public ListOpenWorkflowExecutionsRequest withRequest(openapisdk.models.shared.ListOpenWorkflowExecutionsInput request) {
        this.request = request;
        return this;
    }
}