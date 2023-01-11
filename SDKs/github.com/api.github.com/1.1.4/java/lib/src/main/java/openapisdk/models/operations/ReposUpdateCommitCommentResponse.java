package openapisdk.models.operations;



public class ReposUpdateCommitCommentResponse {
    public String contentType;
    public ReposUpdateCommitCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposUpdateCommitCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposUpdateCommitCommentResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.CommitComment commitComment;
    public ReposUpdateCommitCommentResponse withCommitComment(openapisdk.models.shared.CommitComment commitComment) {
        this.commitComment = commitComment;
        return this;
    }
}