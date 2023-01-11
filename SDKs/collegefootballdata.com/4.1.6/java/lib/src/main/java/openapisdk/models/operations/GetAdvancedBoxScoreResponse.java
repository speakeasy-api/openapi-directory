package openapisdk.models.operations;



public class GetAdvancedBoxScoreResponse {
    public openapisdk.models.shared.BoxScore boxScore;
    public GetAdvancedBoxScoreResponse withBoxScore(openapisdk.models.shared.BoxScore boxScore) {
        this.boxScore = boxScore;
        return this;
    }
    public String contentType;
    public GetAdvancedBoxScoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAdvancedBoxScoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}