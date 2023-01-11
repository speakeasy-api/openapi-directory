package openapisdk.models.operations;



public class PostSubmissionCommentResponse {
    public openapisdk.models.shared.AssignmentSubmissionComment assignmentSubmissionComment;
    public PostSubmissionCommentResponse withAssignmentSubmissionComment(openapisdk.models.shared.AssignmentSubmissionComment assignmentSubmissionComment) {
        this.assignmentSubmissionComment = assignmentSubmissionComment;
        return this;
    }
    public String contentType;
    public PostSubmissionCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public PostSubmissionCommentResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public PostSubmissionCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}