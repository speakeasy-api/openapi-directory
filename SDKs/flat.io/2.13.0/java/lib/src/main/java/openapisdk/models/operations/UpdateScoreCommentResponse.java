package openapisdk.models.operations;



public class UpdateScoreCommentResponse {
    public String contentType;
    public UpdateScoreCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public UpdateScoreCommentResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public openapisdk.models.shared.ScoreComment scoreComment;
    public UpdateScoreCommentResponse withScoreComment(openapisdk.models.shared.ScoreComment scoreComment) {
        this.scoreComment = scoreComment;
        return this;
    }
    public Long statusCode;
    public UpdateScoreCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}