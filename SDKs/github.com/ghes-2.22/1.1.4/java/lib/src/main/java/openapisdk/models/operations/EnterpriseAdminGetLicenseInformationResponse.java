package openapisdk.models.operations;



public class EnterpriseAdminGetLicenseInformationResponse {
    public String contentType;
    public EnterpriseAdminGetLicenseInformationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminGetLicenseInformationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LicenseInfo licenseInfo;
    public EnterpriseAdminGetLicenseInformationResponse withLicenseInfo(openapisdk.models.shared.LicenseInfo licenseInfo) {
        this.licenseInfo = licenseInfo;
        return this;
    }
}