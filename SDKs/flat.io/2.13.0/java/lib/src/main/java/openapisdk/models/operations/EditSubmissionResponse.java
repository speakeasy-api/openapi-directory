package openapisdk.models.operations;



public class EditSubmissionResponse {
    public openapisdk.models.shared.AssignmentSubmission assignmentSubmission;
    public EditSubmissionResponse withAssignmentSubmission(openapisdk.models.shared.AssignmentSubmission assignmentSubmission) {
        this.assignmentSubmission = assignmentSubmission;
        return this;
    }
    public String contentType;
    public EditSubmissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public EditSubmissionResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public EditSubmissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}