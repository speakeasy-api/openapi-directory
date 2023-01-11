package openapisdk.models.operations;



public class PullsUpdateBranchResponse {
    public String contentType;
    public PullsUpdateBranchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PullsUpdateBranchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public PullsUpdateBranchResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public PullsUpdateBranch202ApplicationJson pullsUpdateBranch202ApplicationJSONObject;
    public PullsUpdateBranchResponse withPullsUpdateBranch202ApplicationJsonObject(PullsUpdateBranch202ApplicationJson pullsUpdateBranch202ApplicationJSONObject) {
        this.pullsUpdateBranch202ApplicationJSONObject = pullsUpdateBranch202ApplicationJSONObject;
        return this;
    }
    public PullsUpdateBranch415ApplicationJson pullsUpdateBranch415ApplicationJSONObject;
    public PullsUpdateBranchResponse withPullsUpdateBranch415ApplicationJsonObject(PullsUpdateBranch415ApplicationJson pullsUpdateBranch415ApplicationJSONObject) {
        this.pullsUpdateBranch415ApplicationJSONObject = pullsUpdateBranch415ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public PullsUpdateBranchResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}