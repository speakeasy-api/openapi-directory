package openapisdk.models.operations;



public class ReposGetAdminBranchProtectionResponse {
    public String contentType;
    public ReposGetAdminBranchProtectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetAdminBranchProtectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ProtectedBranchAdminEnforced protectedBranchAdminEnforced;
    public ReposGetAdminBranchProtectionResponse withProtectedBranchAdminEnforced(openapisdk.models.shared.ProtectedBranchAdminEnforced protectedBranchAdminEnforced) {
        this.protectedBranchAdminEnforced = protectedBranchAdminEnforced;
        return this;
    }
}