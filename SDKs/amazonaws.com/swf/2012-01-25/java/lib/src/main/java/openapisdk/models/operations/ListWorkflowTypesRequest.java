package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWorkflowTypesRequest {
    public ListWorkflowTypesQueryParams queryParams;
    public ListWorkflowTypesRequest withQueryParams(ListWorkflowTypesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListWorkflowTypesHeaders headers;
    public ListWorkflowTypesRequest withHeaders(ListWorkflowTypesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListWorkflowTypesInput request;
    public ListWorkflowTypesRequest withRequest(openapisdk.models.shared.ListWorkflowTypesInput request) {
        this.request = request;
        return this;
    }
}