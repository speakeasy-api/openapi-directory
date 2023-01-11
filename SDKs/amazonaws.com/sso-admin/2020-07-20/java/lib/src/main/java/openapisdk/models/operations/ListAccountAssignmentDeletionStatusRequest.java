package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAccountAssignmentDeletionStatusRequest {
    public ListAccountAssignmentDeletionStatusQueryParams queryParams;
    public ListAccountAssignmentDeletionStatusRequest withQueryParams(ListAccountAssignmentDeletionStatusQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAccountAssignmentDeletionStatusHeaders headers;
    public ListAccountAssignmentDeletionStatusRequest withHeaders(ListAccountAssignmentDeletionStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListAccountAssignmentDeletionStatusRequest request;
    public ListAccountAssignmentDeletionStatusRequest withRequest(openapisdk.models.shared.ListAccountAssignmentDeletionStatusRequest request) {
        this.request = request;
        return this;
    }
}