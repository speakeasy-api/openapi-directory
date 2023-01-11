package openapisdk.models.operations;



public class MarkScoreCommentUnresolvedResponse {
    public String contentType;
    public MarkScoreCommentUnresolvedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public MarkScoreCommentUnresolvedResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public MarkScoreCommentUnresolvedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}