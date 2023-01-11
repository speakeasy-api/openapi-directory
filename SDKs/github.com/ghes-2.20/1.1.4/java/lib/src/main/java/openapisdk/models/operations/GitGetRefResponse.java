package openapisdk.models.operations;



public class GitGetRefResponse {
    public String contentType;
    public GitGetRefResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GitGetRefResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public GitGetRefResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.GitRef gitRef;
    public GitGetRefResponse withGitRef(openapisdk.models.shared.GitRef gitRef) {
        this.gitRef = gitRef;
        return this;
    }
}