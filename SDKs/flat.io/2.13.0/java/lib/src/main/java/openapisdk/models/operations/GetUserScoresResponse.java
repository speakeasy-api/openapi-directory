package openapisdk.models.operations;



public class GetUserScoresResponse {
    public String contentType;
    public GetUserScoresResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public GetUserScoresResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public openapisdk.models.shared.ScoreDetails[] scoreDetails;
    public GetUserScoresResponse withScoreDetails(openapisdk.models.shared.ScoreDetails[] scoreDetails) {
        this.scoreDetails = scoreDetails;
        return this;
    }
    public Long statusCode;
    public GetUserScoresResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}