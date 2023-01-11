package openapisdk.models.operations;



public class PackagesGetPackageForOrganizationResponse {
    public String contentType;
    public PackagesGetPackageForOrganizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PackagesGetPackageForOrganizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Package package_;
    public PackagesGetPackageForOrganizationResponse withPackage(openapisdk.models.shared.Package package_) {
        this.package_ = package_;
        return this;
    }
}