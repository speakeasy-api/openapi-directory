package openapisdk.models.operations;



public class PackagesDeletePackageVersionForOrgResponse {
    public String contentType;
    public PackagesDeletePackageVersionForOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PackagesDeletePackageVersionForOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public PackagesDeletePackageVersionForOrgResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
}