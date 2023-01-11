package openapisdk.models.operations;



public class GitCreateTagResponse {
    public String contentType;
    public GitCreateTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GitCreateTagResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GitCreateTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GitTag gitTag;
    public GitCreateTagResponse withGitTag(openapisdk.models.shared.GitTag gitTag) {
        this.gitTag = gitTag;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public GitCreateTagResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}