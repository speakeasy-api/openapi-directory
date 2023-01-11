package openapisdk.models.operations;



public class PackagesGetPackageVersionForOrganizationResponse {
    public String contentType;
    public PackagesGetPackageVersionForOrganizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PackagesGetPackageVersionForOrganizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PackageVersion packageVersion;
    public PackagesGetPackageVersionForOrganizationResponse withPackageVersion(openapisdk.models.shared.PackageVersion packageVersion) {
        this.packageVersion = packageVersion;
        return this;
    }
}