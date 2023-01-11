package openapisdk.models.operations;



public class EnterpriseAdminCreatePreReceiveHookResponse {
    public String contentType;
    public EnterpriseAdminCreatePreReceiveHookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminCreatePreReceiveHookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreReceiveHook preReceiveHook;
    public EnterpriseAdminCreatePreReceiveHookResponse withPreReceiveHook(openapisdk.models.shared.PreReceiveHook preReceiveHook) {
        this.preReceiveHook = preReceiveHook;
        return this;
    }
}