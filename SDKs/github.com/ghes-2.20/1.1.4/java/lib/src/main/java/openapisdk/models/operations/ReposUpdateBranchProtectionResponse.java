package openapisdk.models.operations;



public class ReposUpdateBranchProtectionResponse {
    public String contentType;
    public ReposUpdateBranchProtectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposUpdateBranchProtectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposUpdateBranchProtectionResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ProtectedBranch protectedBranch;
    public ReposUpdateBranchProtectionResponse withProtectedBranch(openapisdk.models.shared.ProtectedBranch protectedBranch) {
        this.protectedBranch = protectedBranch;
        return this;
    }
    public ReposUpdateBranchProtection415ApplicationJson reposUpdateBranchProtection415ApplicationJSONObject;
    public ReposUpdateBranchProtectionResponse withReposUpdateBranchProtection415ApplicationJsonObject(ReposUpdateBranchProtection415ApplicationJson reposUpdateBranchProtection415ApplicationJSONObject) {
        this.reposUpdateBranchProtection415ApplicationJSONObject = reposUpdateBranchProtection415ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.ValidationErrorSimple validationErrorSimple;
    public ReposUpdateBranchProtectionResponse withValidationErrorSimple(openapisdk.models.shared.ValidationErrorSimple validationErrorSimple) {
        this.validationErrorSimple = validationErrorSimple;
        return this;
    }
}