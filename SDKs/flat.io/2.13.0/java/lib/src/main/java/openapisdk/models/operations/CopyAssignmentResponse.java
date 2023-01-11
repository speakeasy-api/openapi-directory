package openapisdk.models.operations;



public class CopyAssignmentResponse {
    public openapisdk.models.shared.Assignment assignment;
    public CopyAssignmentResponse withAssignment(openapisdk.models.shared.Assignment assignment) {
        this.assignment = assignment;
        return this;
    }
    public String contentType;
    public CopyAssignmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public CopyAssignmentResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public CopyAssignmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}