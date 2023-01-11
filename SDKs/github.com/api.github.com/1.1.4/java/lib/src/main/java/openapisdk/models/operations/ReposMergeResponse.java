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
    public ReposMerge404ApplicationJson reposMerge404ApplicationJSONObject;
    public ReposMergeResponse withReposMerge404ApplicationJsonObject(ReposMerge404ApplicationJson reposMerge404ApplicationJSONObject) {
        this.reposMerge404ApplicationJSONObject = reposMerge404ApplicationJSONObject;
        return this;
    }
    public ReposMerge409ApplicationJson reposMerge409ApplicationJSONObject;
    public ReposMergeResponse withReposMerge409ApplicationJsonObject(ReposMerge409ApplicationJson reposMerge409ApplicationJSONObject) {
        this.reposMerge409ApplicationJSONObject = reposMerge409ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposMergeResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}