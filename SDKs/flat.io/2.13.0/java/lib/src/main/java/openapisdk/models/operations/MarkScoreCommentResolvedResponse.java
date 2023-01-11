package openapisdk.models.operations;



public class MarkScoreCommentResolvedResponse {
    public String contentType;
    public MarkScoreCommentResolvedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public MarkScoreCommentResolvedResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public MarkScoreCommentResolvedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}