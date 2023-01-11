package openapisdk.models.operations;



public class EnterpriseAdminUpdatePreReceiveEnvironmentResponse {
    public String contentType;
    public EnterpriseAdminUpdatePreReceiveEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminUpdatePreReceiveEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJson enterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSONObject;
    public EnterpriseAdminUpdatePreReceiveEnvironmentResponse withEnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonObject(EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJson enterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSONObject) {
        this.enterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSONObject = enterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.PreReceiveEnvironment preReceiveEnvironment;
    public EnterpriseAdminUpdatePreReceiveEnvironmentResponse withPreReceiveEnvironment(openapisdk.models.shared.PreReceiveEnvironment preReceiveEnvironment) {
        this.preReceiveEnvironment = preReceiveEnvironment;
        return this;
    }
}