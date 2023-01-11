package openapisdk.models.operations;



public class PullsListCommentsForReviewResponse {
    public String contentType;
    public PullsListCommentsForReviewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PullsListCommentsForReviewResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PullsListCommentsForReviewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public PullsListCommentsForReviewResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ReviewComment[] reviewComments;
    public PullsListCommentsForReviewResponse withReviewComments(openapisdk.models.shared.ReviewComment[] reviewComments) {
        this.reviewComments = reviewComments;
        return this;
    }
}