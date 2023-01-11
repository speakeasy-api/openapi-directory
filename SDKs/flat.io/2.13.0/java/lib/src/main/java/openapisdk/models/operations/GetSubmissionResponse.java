package openapisdk.models.operations;



public class GetSubmissionResponse {
    public openapisdk.models.shared.AssignmentSubmission assignmentSubmission;
    public GetSubmissionResponse withAssignmentSubmission(openapisdk.models.shared.AssignmentSubmission assignmentSubmission) {
        this.assignmentSubmission = assignmentSubmission;
        return this;
    }
    public String contentType;
    public GetSubmissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public GetSubmissionResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public GetSubmissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}