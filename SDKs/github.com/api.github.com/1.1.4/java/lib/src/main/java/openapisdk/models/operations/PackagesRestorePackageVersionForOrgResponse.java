package openapisdk.models.operations;



public class PackagesRestorePackageVersionForOrgResponse {
    public String contentType;
    public PackagesRestorePackageVersionForOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PackagesRestorePackageVersionForOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public PackagesRestorePackageVersionForOrgResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
}