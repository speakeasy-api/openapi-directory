package openapisdk.models.operations;



public class ReposListCommitsResponse {
    public String contentType;
    public ReposListCommitsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposListCommitsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposListCommitsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposListCommitsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Commit[] commits;
    public ReposListCommitsResponse withCommits(openapisdk.models.shared.Commit[] commits) {
        this.commits = commits;
        return this;
    }
    public openapisdk.models.shared.ScimError scimError;
    public ReposListCommitsResponse withScimError(openapisdk.models.shared.ScimError scimError) {
        this.scimError = scimError;
        return this;
    }
}