package openapisdk.models.operations;



public class GetScoreResponse {
    public String contentType;
    public GetScoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public GetScoreResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public openapisdk.models.shared.ScoreDetails scoreDetails;
    public GetScoreResponse withScoreDetails(openapisdk.models.shared.ScoreDetails scoreDetails) {
        this.scoreDetails = scoreDetails;
        return this;
    }
    public Long statusCode;
    public GetScoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}