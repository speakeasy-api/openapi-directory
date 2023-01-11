package openapisdk.models.operations;



public class ReposGetCommitResponse {
    public String contentType;
    public ReposGetCommitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetCommitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetCommitResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Commit commit;
    public ReposGetCommitResponse withCommit(openapisdk.models.shared.Commit commit) {
        this.commit = commit;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposGetCommitResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}