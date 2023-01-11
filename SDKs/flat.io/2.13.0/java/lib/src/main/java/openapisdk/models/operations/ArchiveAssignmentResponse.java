package openapisdk.models.operations;



public class ArchiveAssignmentResponse {
    public openapisdk.models.shared.Assignment assignment;
    public ArchiveAssignmentResponse withAssignment(openapisdk.models.shared.Assignment assignment) {
        this.assignment = assignment;
        return this;
    }
    public String contentType;
    public ArchiveAssignmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public ArchiveAssignmentResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public ArchiveAssignmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}