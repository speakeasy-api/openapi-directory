package openapisdk.models.operations;



public class GetGroupScoresResponse {
    public String contentType;
    public GetGroupScoresResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public GetGroupScoresResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public openapisdk.models.shared.ScoreDetails[] scoreDetails;
    public GetGroupScoresResponse withScoreDetails(openapisdk.models.shared.ScoreDetails[] scoreDetails) {
        this.scoreDetails = scoreDetails;
        return this;
    }
    public Long statusCode;
    public GetGroupScoresResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}