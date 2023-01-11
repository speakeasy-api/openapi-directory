package openapisdk.models.operations;



public class GetSubmissionCommentsResponse {
    public openapisdk.models.shared.AssignmentSubmissionComment[] assignmentSubmissionComments;
    public GetSubmissionCommentsResponse withAssignmentSubmissionComments(openapisdk.models.shared.AssignmentSubmissionComment[] assignmentSubmissionComments) {
        this.assignmentSubmissionComments = assignmentSubmissionComments;
        return this;
    }
    public String contentType;
    public GetSubmissionCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public GetSubmissionCommentsResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public GetSubmissionCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}