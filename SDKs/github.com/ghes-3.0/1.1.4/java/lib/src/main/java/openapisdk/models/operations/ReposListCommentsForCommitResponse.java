package openapisdk.models.operations;



public class ReposListCommentsForCommitResponse {
    public String contentType;
    public ReposListCommentsForCommitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposListCommentsForCommitResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposListCommentsForCommitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CommitComment[] commitComments;
    public ReposListCommentsForCommitResponse withCommitComments(openapisdk.models.shared.CommitComment[] commitComments) {
        this.commitComments = commitComments;
        return this;
    }
}