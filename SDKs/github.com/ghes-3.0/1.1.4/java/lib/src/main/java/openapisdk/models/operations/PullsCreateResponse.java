package openapisdk.models.operations;



public class PullsCreateResponse {
    public String contentType;
    public PullsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PullsCreateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PullsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public PullsCreateResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.PullRequest pullRequest;
    public PullsCreateResponse withPullRequest(openapisdk.models.shared.PullRequest pullRequest) {
        this.pullRequest = pullRequest;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public PullsCreateResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}