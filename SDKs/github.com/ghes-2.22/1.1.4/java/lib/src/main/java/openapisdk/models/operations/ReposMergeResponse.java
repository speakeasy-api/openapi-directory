package openapisdk.models.operations;



public class ReposMergeResponse {
    public String contentType;
    public ReposMergeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposMergeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposMergeResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Commit commit;
    public ReposMergeResponse withCommit(openapisdk.models.shared.Commit commit) {
        this.commit = commit;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposMergeResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}