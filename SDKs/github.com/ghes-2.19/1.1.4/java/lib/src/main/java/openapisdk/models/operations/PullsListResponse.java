package openapisdk.models.operations;



public class PullsListResponse {
    public String contentType;
    public PullsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PullsListResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PullsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PullRequestSimple[] pullRequestSimples;
    public PullsListResponse withPullRequestSimples(openapisdk.models.shared.PullRequestSimple[] pullRequestSimples) {
        this.pullRequestSimples = pullRequestSimples;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public PullsListResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}