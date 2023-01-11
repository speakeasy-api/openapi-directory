package openapisdk.models.operations;



public class ListAssignmentsResponse {
    public openapisdk.models.shared.Assignment[] assignments;
    public ListAssignmentsResponse withAssignments(openapisdk.models.shared.Assignment[] assignments) {
        this.assignments = assignments;
        return this;
    }
    public String contentType;
    public ListAssignmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public ListAssignmentsResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public ListAssignmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}