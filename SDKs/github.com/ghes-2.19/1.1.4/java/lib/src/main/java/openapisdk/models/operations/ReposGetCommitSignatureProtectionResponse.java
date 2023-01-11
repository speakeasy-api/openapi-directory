package openapisdk.models.operations;



public class ReposGetCommitSignatureProtectionResponse {
    public String contentType;
    public ReposGetCommitSignatureProtectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetCommitSignatureProtectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetCommitSignatureProtectionResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ProtectedBranchAdminEnforced protectedBranchAdminEnforced;
    public ReposGetCommitSignatureProtectionResponse withProtectedBranchAdminEnforced(openapisdk.models.shared.ProtectedBranchAdminEnforced protectedBranchAdminEnforced) {
        this.protectedBranchAdminEnforced = protectedBranchAdminEnforced;
        return this;
    }
}