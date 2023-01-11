package openapisdk.models.operations;



public class GitGetCommitResponse {
    public String contentType;
    public GitGetCommitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GitGetCommitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public GitGetCommitResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.GitCommit gitCommit;
    public GitGetCommitResponse withGitCommit(openapisdk.models.shared.GitCommit gitCommit) {
        this.gitCommit = gitCommit;
        return this;
    }
}