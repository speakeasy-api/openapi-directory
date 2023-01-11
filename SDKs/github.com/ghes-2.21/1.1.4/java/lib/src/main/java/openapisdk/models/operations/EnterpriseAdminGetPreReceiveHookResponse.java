package openapisdk.models.operations;



public class EnterpriseAdminGetPreReceiveHookResponse {
    public String contentType;
    public EnterpriseAdminGetPreReceiveHookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminGetPreReceiveHookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreReceiveHook preReceiveHook;
    public EnterpriseAdminGetPreReceiveHookResponse withPreReceiveHook(openapisdk.models.shared.PreReceiveHook preReceiveHook) {
        this.preReceiveHook = preReceiveHook;
        return this;
    }
}