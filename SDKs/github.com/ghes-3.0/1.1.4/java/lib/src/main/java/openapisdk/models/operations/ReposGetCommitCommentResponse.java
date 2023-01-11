package openapisdk.models.operations;



public class ReposGetCommitCommentResponse {
    public String contentType;
    public ReposGetCommitCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetCommitCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetCommitCommentResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.CommitComment commitComment;
    public ReposGetCommitCommentResponse withCommitComment(openapisdk.models.shared.CommitComment commitComment) {
        this.commitComment = commitComment;
        return this;
    }
}