package openapisdk.models.operations;



public class ReposListBranchesResponse {
    public String contentType;
    public ReposListBranchesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposListBranchesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposListBranchesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposListBranchesResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ShortBranch[] shortBranches;
    public ReposListBranchesResponse withShortBranches(openapisdk.models.shared.ShortBranch[] shortBranches) {
        this.shortBranches = shortBranches;
        return this;
    }
}