package openapisdk.models.operations;



public class PackagesGetAllPackageVersionsForPackageOwnedByOrgResponse {
    public String contentType;
    public PackagesGetAllPackageVersionsForPackageOwnedByOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PackagesGetAllPackageVersionsForPackageOwnedByOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public PackagesGetAllPackageVersionsForPackageOwnedByOrgResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.PackageVersion[] packageVersions;
    public PackagesGetAllPackageVersionsForPackageOwnedByOrgResponse withPackageVersions(openapisdk.models.shared.PackageVersion[] packageVersions) {
        this.packageVersions = packageVersions;
        return this;
    }
}