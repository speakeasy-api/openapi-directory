package openapisdk.models.operations;



public class PackagesDeletePackageForOrgResponse {
    public String contentType;
    public PackagesDeletePackageForOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PackagesDeletePackageForOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public PackagesDeletePackageForOrgResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
}