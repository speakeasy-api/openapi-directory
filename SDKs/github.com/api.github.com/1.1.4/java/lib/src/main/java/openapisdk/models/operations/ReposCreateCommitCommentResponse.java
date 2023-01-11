package openapisdk.models.operations;



public class ReposCreateCommitCommentResponse {
    public String contentType;
    public ReposCreateCommitCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposCreateCommitCommentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposCreateCommitCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposCreateCommitCommentResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.CommitComment commitComment;
    public ReposCreateCommitCommentResponse withCommitComment(openapisdk.models.shared.CommitComment commitComment) {
        this.commitComment = commitComment;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposCreateCommitCommentResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}