package openapisdk.models.operations;



public class UnarchiveAssignmentResponse {
    public openapisdk.models.shared.Assignment assignment;
    public UnarchiveAssignmentResponse withAssignment(openapisdk.models.shared.Assignment assignment) {
        this.assignment = assignment;
        return this;
    }
    public String contentType;
    public UnarchiveAssignmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public UnarchiveAssignmentResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public UnarchiveAssignmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}