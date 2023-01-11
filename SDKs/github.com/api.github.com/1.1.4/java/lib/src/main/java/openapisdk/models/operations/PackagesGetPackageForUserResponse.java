package openapisdk.models.operations;



public class PackagesGetPackageForUserResponse {
    public String contentType;
    public PackagesGetPackageForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PackagesGetPackageForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Package package_;
    public PackagesGetPackageForUserResponse withPackage(openapisdk.models.shared.Package package_) {
        this.package_ = package_;
        return this;
    }
}