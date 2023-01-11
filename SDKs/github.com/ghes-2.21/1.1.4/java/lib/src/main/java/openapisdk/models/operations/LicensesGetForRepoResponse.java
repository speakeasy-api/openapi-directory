package openapisdk.models.operations;



public class LicensesGetForRepoResponse {
    public String contentType;
    public LicensesGetForRepoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LicensesGetForRepoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LicenseContent licenseContent;
    public LicensesGetForRepoResponse withLicenseContent(openapisdk.models.shared.LicenseContent licenseContent) {
        this.licenseContent = licenseContent;
        return this;
    }
}