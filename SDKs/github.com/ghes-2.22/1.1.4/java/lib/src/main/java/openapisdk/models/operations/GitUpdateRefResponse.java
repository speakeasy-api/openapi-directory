package openapisdk.models.operations;



public class GitUpdateRefResponse {
    public String contentType;
    public GitUpdateRefResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GitUpdateRefResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GitRef gitRef;
    public GitUpdateRefResponse withGitRef(openapisdk.models.shared.GitRef gitRef) {
        this.gitRef = gitRef;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public GitUpdateRefResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}