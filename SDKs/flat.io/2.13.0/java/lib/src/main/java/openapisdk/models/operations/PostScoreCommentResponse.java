package openapisdk.models.operations;



public class PostScoreCommentResponse {
    public String contentType;
    public PostScoreCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public PostScoreCommentResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public openapisdk.models.shared.ScoreComment scoreComment;
    public PostScoreCommentResponse withScoreComment(openapisdk.models.shared.ScoreComment scoreComment) {
        this.scoreComment = scoreComment;
        return this;
    }
    public Long statusCode;
    public PostScoreCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}