package openapisdk.models.operations;



public class GetScoreRevisionResponse {
    public String contentType;
    public GetScoreRevisionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public GetScoreRevisionResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public openapisdk.models.shared.ScoreRevision scoreRevision;
    public GetScoreRevisionResponse withScoreRevision(openapisdk.models.shared.ScoreRevision scoreRevision) {
        this.scoreRevision = scoreRevision;
        return this;
    }
    public Long statusCode;
    public GetScoreRevisionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}