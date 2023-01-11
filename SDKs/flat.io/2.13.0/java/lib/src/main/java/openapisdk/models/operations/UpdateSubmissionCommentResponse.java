package openapisdk.models.operations;



public class UpdateSubmissionCommentResponse {
    public openapisdk.models.shared.AssignmentSubmissionComment assignmentSubmissionComment;
    public UpdateSubmissionCommentResponse withAssignmentSubmissionComment(openapisdk.models.shared.AssignmentSubmissionComment assignmentSubmissionComment) {
        this.assignmentSubmissionComment = assignmentSubmissionComment;
        return this;
    }
    public String contentType;
    public UpdateSubmissionCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public UpdateSubmissionCommentResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public UpdateSubmissionCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}