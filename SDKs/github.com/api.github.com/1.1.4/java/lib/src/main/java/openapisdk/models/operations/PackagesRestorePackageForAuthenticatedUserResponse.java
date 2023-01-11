package openapisdk.models.operations;



public class PackagesRestorePackageForAuthenticatedUserResponse {
    public String contentType;
    public PackagesRestorePackageForAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PackagesRestorePackageForAuthenticatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public PackagesRestorePackageForAuthenticatedUserResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
}