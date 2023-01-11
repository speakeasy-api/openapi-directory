package openapisdk.models.operations;



public class GitCreateRefResponse {
    public String contentType;
    public GitCreateRefResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GitCreateRefResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GitCreateRefResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GitRef gitRef;
    public GitCreateRefResponse withGitRef(openapisdk.models.shared.GitRef gitRef) {
        this.gitRef = gitRef;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public GitCreateRefResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}