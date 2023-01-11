package openapisdk.models.operations;



public class CreateScoreResponse {
    public String contentType;
    public CreateScoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public CreateScoreResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public openapisdk.models.shared.ScoreDetails scoreDetails;
    public CreateScoreResponse withScoreDetails(openapisdk.models.shared.ScoreDetails scoreDetails) {
        this.scoreDetails = scoreDetails;
        return this;
    }
    public Long statusCode;
    public CreateScoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}