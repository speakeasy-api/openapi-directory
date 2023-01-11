package openapisdk.models.operations;



public class GitCreateTreeResponse {
    public String contentType;
    public GitCreateTreeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GitCreateTreeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GitCreateTreeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public GitCreateTreeResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.GitTree gitTree;
    public GitCreateTreeResponse withGitTree(openapisdk.models.shared.GitTree gitTree) {
        this.gitTree = gitTree;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public GitCreateTreeResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}