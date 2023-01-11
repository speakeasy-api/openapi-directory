package openapisdk.models.operations;



public class PullsCreateReviewCommentAlternativeResponse {
    public String contentType;
    public PullsCreateReviewCommentAlternativeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PullsCreateReviewCommentAlternativeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PullsCreateReviewCommentAlternativeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyReviewComment legacyReviewComment;
    public PullsCreateReviewCommentAlternativeResponse withLegacyReviewComment(openapisdk.models.shared.LegacyReviewComment legacyReviewComment) {
        this.legacyReviewComment = legacyReviewComment;
        return this;
    }
}