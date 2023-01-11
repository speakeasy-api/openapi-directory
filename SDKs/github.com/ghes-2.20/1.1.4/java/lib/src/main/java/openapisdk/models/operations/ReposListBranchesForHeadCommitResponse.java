package openapisdk.models.operations;



public class ReposListBranchesForHeadCommitResponse {
    public String contentType;
    public ReposListBranchesForHeadCommitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposListBranchesForHeadCommitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BranchShort[] branchShorts;
    public ReposListBranchesForHeadCommitResponse withBranchShorts(openapisdk.models.shared.BranchShort[] branchShorts) {
        this.branchShorts = branchShorts;
        return this;
    }
    public ReposListBranchesForHeadCommit415ApplicationJson reposListBranchesForHeadCommit415ApplicationJSONObject;
    public ReposListBranchesForHeadCommitResponse withReposListBranchesForHeadCommit415ApplicationJsonObject(ReposListBranchesForHeadCommit415ApplicationJson reposListBranchesForHeadCommit415ApplicationJSONObject) {
        this.reposListBranchesForHeadCommit415ApplicationJSONObject = reposListBranchesForHeadCommit415ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposListBranchesForHeadCommitResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}