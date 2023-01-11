package openapisdk.models.operations;



public class IssuesListForRepoResponse {
    public String contentType;
    public IssuesListForRepoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public IssuesListForRepoResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public IssuesListForRepoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public IssuesListForRepoResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.IssueSimple[] issueSimples;
    public IssuesListForRepoResponse withIssueSimples(openapisdk.models.shared.IssueSimple[] issueSimples) {
        this.issueSimples = issueSimples;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public IssuesListForRepoResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}