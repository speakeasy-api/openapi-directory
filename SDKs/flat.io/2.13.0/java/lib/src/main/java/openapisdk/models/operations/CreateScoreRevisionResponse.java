package openapisdk.models.operations;



public class CreateScoreRevisionResponse {
    public String contentType;
    public CreateScoreRevisionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public CreateScoreRevisionResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public openapisdk.models.shared.ScoreRevision scoreRevision;
    public CreateScoreRevisionResponse withScoreRevision(openapisdk.models.shared.ScoreRevision scoreRevision) {
        this.scoreRevision = scoreRevision;
        return this;
    }
    public Long statusCode;
    public CreateScoreRevisionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}