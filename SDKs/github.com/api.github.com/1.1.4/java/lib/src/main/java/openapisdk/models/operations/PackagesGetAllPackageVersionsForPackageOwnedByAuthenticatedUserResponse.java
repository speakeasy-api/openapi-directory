package openapisdk.models.operations;



public class PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserResponse {
    public String contentType;
    public PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.PackageVersion[] packageVersions;
    public PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserResponse withPackageVersions(openapisdk.models.shared.PackageVersion[] packageVersions) {
        this.packageVersions = packageVersions;
        return this;
    }
}