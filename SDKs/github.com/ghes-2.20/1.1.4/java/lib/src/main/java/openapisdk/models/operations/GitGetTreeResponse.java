package openapisdk.models.operations;



public class GitGetTreeResponse {
    public String contentType;
    public GitGetTreeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GitGetTreeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public GitGetTreeResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.GitTree gitTree;
    public GitGetTreeResponse withGitTree(openapisdk.models.shared.GitTree gitTree) {
        this.gitTree = gitTree;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public GitGetTreeResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}