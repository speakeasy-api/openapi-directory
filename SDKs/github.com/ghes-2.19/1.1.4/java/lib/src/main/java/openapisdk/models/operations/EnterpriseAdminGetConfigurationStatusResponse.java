package openapisdk.models.operations;



public class EnterpriseAdminGetConfigurationStatusResponse {
    public String contentType;
    public EnterpriseAdminGetConfigurationStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminGetConfigurationStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConfigurationStatus configurationStatus;
    public EnterpriseAdminGetConfigurationStatusResponse withConfigurationStatus(openapisdk.models.shared.ConfigurationStatus configurationStatus) {
        this.configurationStatus = configurationStatus;
        return this;
    }
}