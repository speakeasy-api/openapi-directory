package openapisdk.models.operations;



public class PackagesGetPackageVersionForUserResponse {
    public String contentType;
    public PackagesGetPackageVersionForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PackagesGetPackageVersionForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PackageVersion packageVersion;
    public PackagesGetPackageVersionForUserResponse withPackageVersion(openapisdk.models.shared.PackageVersion packageVersion) {
        this.packageVersion = packageVersion;
        return this;
    }
}