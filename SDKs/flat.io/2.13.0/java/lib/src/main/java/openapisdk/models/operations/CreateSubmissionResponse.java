package openapisdk.models.operations;



public class CreateSubmissionResponse {
    public openapisdk.models.shared.AssignmentSubmission assignmentSubmission;
    public CreateSubmissionResponse withAssignmentSubmission(openapisdk.models.shared.AssignmentSubmission assignmentSubmission) {
        this.assignmentSubmission = assignmentSubmission;
        return this;
    }
    public String contentType;
    public CreateSubmissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public CreateSubmissionResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public CreateSubmissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}