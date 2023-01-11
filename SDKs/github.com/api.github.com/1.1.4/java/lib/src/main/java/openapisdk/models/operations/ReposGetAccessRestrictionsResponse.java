package openapisdk.models.operations;



public class ReposGetAccessRestrictionsResponse {
    public String contentType;
    public ReposGetAccessRestrictionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetAccessRestrictionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetAccessRestrictionsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.BranchRestrictionPolicy branchRestrictionPolicy;
    public ReposGetAccessRestrictionsResponse withBranchRestrictionPolicy(openapisdk.models.shared.BranchRestrictionPolicy branchRestrictionPolicy) {
        this.branchRestrictionPolicy = branchRestrictionPolicy;
        return this;
    }
}