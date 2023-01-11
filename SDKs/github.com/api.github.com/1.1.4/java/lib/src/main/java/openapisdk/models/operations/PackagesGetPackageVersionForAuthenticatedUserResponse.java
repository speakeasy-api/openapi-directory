package openapisdk.models.operations;



public class PackagesGetPackageVersionForAuthenticatedUserResponse {
    public String contentType;
    public PackagesGetPackageVersionForAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PackagesGetPackageVersionForAuthenticatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PackageVersion packageVersion;
    public PackagesGetPackageVersionForAuthenticatedUserResponse withPackageVersion(openapisdk.models.shared.PackageVersion packageVersion) {
        this.packageVersion = packageVersion;
        return this;
    }
}