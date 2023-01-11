package openapisdk.models.operations;



public class ListCollectionScoresResponse {
    public String contentType;
    public ListCollectionScoresResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public ListCollectionScoresResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public openapisdk.models.shared.ScoreDetails[] scoreDetails;
    public ListCollectionScoresResponse withScoreDetails(openapisdk.models.shared.ScoreDetails[] scoreDetails) {
        this.scoreDetails = scoreDetails;
        return this;
    }
    public Long statusCode;
    public ListCollectionScoresResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}