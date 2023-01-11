package openapisdk.models.operations;



public class GitCreateCommitResponse {
    public String contentType;
    public GitCreateCommitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GitCreateCommitResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GitCreateCommitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public GitCreateCommitResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.GitCommit gitCommit;
    public GitCreateCommitResponse withGitCommit(openapisdk.models.shared.GitCommit gitCommit) {
        this.gitCommit = gitCommit;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public GitCreateCommitResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}