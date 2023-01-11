package openapisdk.models.operations;



public class ForkScoreResponse {
    public String contentType;
    public ForkScoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public ForkScoreResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public openapisdk.models.shared.ScoreDetails scoreDetails;
    public ForkScoreResponse withScoreDetails(openapisdk.models.shared.ScoreDetails scoreDetails) {
        this.scoreDetails = scoreDetails;
        return this;
    }
    public Long statusCode;
    public ForkScoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}