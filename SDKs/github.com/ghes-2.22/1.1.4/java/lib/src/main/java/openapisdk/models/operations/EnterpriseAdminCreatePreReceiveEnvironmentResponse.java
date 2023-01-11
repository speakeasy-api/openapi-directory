package openapisdk.models.operations;



public class EnterpriseAdminCreatePreReceiveEnvironmentResponse {
    public String contentType;
    public EnterpriseAdminCreatePreReceiveEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminCreatePreReceiveEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreReceiveEnvironment preReceiveEnvironment;
    public EnterpriseAdminCreatePreReceiveEnvironmentResponse withPreReceiveEnvironment(openapisdk.models.shared.PreReceiveEnvironment preReceiveEnvironment) {
        this.preReceiveEnvironment = preReceiveEnvironment;
        return this;
    }
}