package openapisdk.models.operations;



public class EditScoreResponse {
    public String contentType;
    public EditScoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public EditScoreResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public openapisdk.models.shared.ScoreDetails scoreDetails;
    public EditScoreResponse withScoreDetails(openapisdk.models.shared.ScoreDetails scoreDetails) {
        this.scoreDetails = scoreDetails;
        return this;
    }
    public Long statusCode;
    public EditScoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}