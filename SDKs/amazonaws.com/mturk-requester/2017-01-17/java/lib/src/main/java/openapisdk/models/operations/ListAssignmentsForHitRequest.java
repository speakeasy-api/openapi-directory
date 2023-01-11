package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAssignmentsForHitRequest {
    public ListAssignmentsForHitQueryParams queryParams;
    public ListAssignmentsForHitRequest withQueryParams(ListAssignmentsForHitQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAssignmentsForHitHeaders headers;
    public ListAssignmentsForHitRequest withHeaders(ListAssignmentsForHitHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListAssignmentsForHitRequest request;
    public ListAssignmentsForHitRequest withRequest(openapisdk.models.shared.ListAssignmentsForHitRequest request) {
        this.request = request;
        return this;
    }
}