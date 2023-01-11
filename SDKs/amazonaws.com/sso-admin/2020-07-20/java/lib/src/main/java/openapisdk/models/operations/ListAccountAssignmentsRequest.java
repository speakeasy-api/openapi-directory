package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAccountAssignmentsRequest {
    public ListAccountAssignmentsQueryParams queryParams;
    public ListAccountAssignmentsRequest withQueryParams(ListAccountAssignmentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAccountAssignmentsHeaders headers;
    public ListAccountAssignmentsRequest withHeaders(ListAccountAssignmentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListAccountAssignmentsRequest request;
    public ListAccountAssignmentsRequest withRequest(openapisdk.models.shared.ListAccountAssignmentsRequest request) {
        this.request = request;
        return this;
    }
}