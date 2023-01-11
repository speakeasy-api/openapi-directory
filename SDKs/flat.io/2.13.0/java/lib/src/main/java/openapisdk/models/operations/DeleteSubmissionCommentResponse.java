package openapisdk.models.operations;



public class DeleteSubmissionCommentResponse {
    public String contentType;
    public DeleteSubmissionCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public DeleteSubmissionCommentResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public DeleteSubmissionCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}