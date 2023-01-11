package openapisdk.models.operations;



public class ReposSetAdminBranchProtectionResponse {
    public String contentType;
    public ReposSetAdminBranchProtectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposSetAdminBranchProtectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ProtectedBranchAdminEnforced protectedBranchAdminEnforced;
    public ReposSetAdminBranchProtectionResponse withProtectedBranchAdminEnforced(openapisdk.models.shared.ProtectedBranchAdminEnforced protectedBranchAdminEnforced) {
        this.protectedBranchAdminEnforced = protectedBranchAdminEnforced;
        return this;
    }
}