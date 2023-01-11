package openapisdk.models.operations;



public class EnterpriseAdminListPreReceiveHooksResponse {
    public String contentType;
    public EnterpriseAdminListPreReceiveHooksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminListPreReceiveHooksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreReceiveHook[] preReceiveHooks;
    public EnterpriseAdminListPreReceiveHooksResponse withPreReceiveHooks(openapisdk.models.shared.PreReceiveHook[] preReceiveHooks) {
        this.preReceiveHooks = preReceiveHooks;
        return this;
    }
}