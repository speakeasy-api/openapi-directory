package openapisdk.models.operations;



public class CreateAssignmentResponse {
    public openapisdk.models.shared.Assignment assignment;
    public CreateAssignmentResponse withAssignment(openapisdk.models.shared.Assignment assignment) {
        this.assignment = assignment;
        return this;
    }
    public String contentType;
    public CreateAssignmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public CreateAssignmentResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public CreateAssignmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}