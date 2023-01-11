package openapisdk.models.operations;



public class GetScoreCommentsResponse {
    public String contentType;
    public GetScoreCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public GetScoreCommentsResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public openapisdk.models.shared.ScoreComment[] scoreComments;
    public GetScoreCommentsResponse withScoreComments(openapisdk.models.shared.ScoreComment[] scoreComments) {
        this.scoreComments = scoreComments;
        return this;
    }
    public Long statusCode;
    public GetScoreCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}