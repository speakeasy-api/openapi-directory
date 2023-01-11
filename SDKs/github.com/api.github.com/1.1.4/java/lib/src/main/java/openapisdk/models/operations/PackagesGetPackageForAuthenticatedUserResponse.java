package openapisdk.models.operations;



public class PackagesGetPackageForAuthenticatedUserResponse {
    public String contentType;
    public PackagesGetPackageForAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PackagesGetPackageForAuthenticatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Package package_;
    public PackagesGetPackageForAuthenticatedUserResponse withPackage(openapisdk.models.shared.Package package_) {
        this.package_ = package_;
        return this;
    }
}