package openapisdk.models.operations;



public class DeleteScoreCommentResponse {
    public String contentType;
    public DeleteScoreCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public DeleteScoreCommentResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public DeleteScoreCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}