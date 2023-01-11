package openapisdk.models.operations;



public class ReposGetBranchResponse {
    public String contentType;
    public ReposGetBranchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetBranchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetBranchResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.BranchWithProtection branchWithProtection;
    public ReposGetBranchResponse withBranchWithProtection(openapisdk.models.shared.BranchWithProtection branchWithProtection) {
        this.branchWithProtection = branchWithProtection;
        return this;
    }
    public ReposGetBranch415ApplicationJson reposGetBranch415ApplicationJSONObject;
    public ReposGetBranchResponse withReposGetBranch415ApplicationJsonObject(ReposGetBranch415ApplicationJson reposGetBranch415ApplicationJSONObject) {
        this.reposGetBranch415ApplicationJSONObject = reposGetBranch415ApplicationJSONObject;
        return this;
    }
}