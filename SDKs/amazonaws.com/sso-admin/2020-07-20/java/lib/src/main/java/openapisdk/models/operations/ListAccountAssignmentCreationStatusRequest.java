package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAccountAssignmentCreationStatusRequest {
    public ListAccountAssignmentCreationStatusQueryParams queryParams;
    public ListAccountAssignmentCreationStatusRequest withQueryParams(ListAccountAssignmentCreationStatusQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAccountAssignmentCreationStatusHeaders headers;
    public ListAccountAssignmentCreationStatusRequest withHeaders(ListAccountAssignmentCreationStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListAccountAssignmentCreationStatusRequest request;
    public ListAccountAssignmentCreationStatusRequest withRequest(openapisdk.models.shared.ListAccountAssignmentCreationStatusRequest request) {
        this.request = request;
        return this;
    }
}