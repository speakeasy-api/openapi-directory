package openapisdk.models.operations;



public class GetScoreRevisionsResponse {
    public String contentType;
    public GetScoreRevisionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public GetScoreRevisionsResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public openapisdk.models.shared.ScoreRevision[] scoreRevisions;
    public GetScoreRevisionsResponse withScoreRevisions(openapisdk.models.shared.ScoreRevision[] scoreRevisions) {
        this.scoreRevisions = scoreRevisions;
        return this;
    }
    public Long statusCode;
    public GetScoreRevisionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}