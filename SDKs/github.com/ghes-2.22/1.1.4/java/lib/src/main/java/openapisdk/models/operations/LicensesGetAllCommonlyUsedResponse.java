package openapisdk.models.operations;



public class LicensesGetAllCommonlyUsedResponse {
    public String contentType;
    public LicensesGetAllCommonlyUsedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LicensesGetAllCommonlyUsedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LicenseSimple[] licenseSimples;
    public LicensesGetAllCommonlyUsedResponse withLicenseSimples(openapisdk.models.shared.LicenseSimple[] licenseSimples) {
        this.licenseSimples = licenseSimples;
        return this;
    }
}