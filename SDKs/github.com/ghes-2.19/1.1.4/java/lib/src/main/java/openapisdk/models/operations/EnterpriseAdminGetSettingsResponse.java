package openapisdk.models.operations;



public class EnterpriseAdminGetSettingsResponse {
    public String contentType;
    public EnterpriseAdminGetSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminGetSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.EnterpriseSettings enterpriseSettings;
    public EnterpriseAdminGetSettingsResponse withEnterpriseSettings(openapisdk.models.shared.EnterpriseSettings enterpriseSettings) {
        this.enterpriseSettings = enterpriseSettings;
        return this;
    }
}