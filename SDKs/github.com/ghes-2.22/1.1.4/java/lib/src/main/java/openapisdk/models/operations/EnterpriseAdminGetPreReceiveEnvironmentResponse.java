package openapisdk.models.operations;



public class EnterpriseAdminGetPreReceiveEnvironmentResponse {
    public String contentType;
    public EnterpriseAdminGetPreReceiveEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminGetPreReceiveEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreReceiveEnvironment preReceiveEnvironment;
    public EnterpriseAdminGetPreReceiveEnvironmentResponse withPreReceiveEnvironment(openapisdk.models.shared.PreReceiveEnvironment preReceiveEnvironment) {
        this.preReceiveEnvironment = preReceiveEnvironment;
        return this;
    }
}