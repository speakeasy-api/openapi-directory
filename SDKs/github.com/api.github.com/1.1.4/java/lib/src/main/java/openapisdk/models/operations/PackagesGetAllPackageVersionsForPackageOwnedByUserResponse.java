package openapisdk.models.operations;



public class PackagesGetAllPackageVersionsForPackageOwnedByUserResponse {
    public String contentType;
    public PackagesGetAllPackageVersionsForPackageOwnedByUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PackagesGetAllPackageVersionsForPackageOwnedByUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public PackagesGetAllPackageVersionsForPackageOwnedByUserResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.PackageVersion[] packageVersions;
    public PackagesGetAllPackageVersionsForPackageOwnedByUserResponse withPackageVersions(openapisdk.models.shared.PackageVersion[] packageVersions) {
        this.packageVersions = packageVersions;
        return this;
    }
}