package openapisdk.models.operations;



public class EnterpriseAdminListGlobalWebhooksResponse {
    public String contentType;
    public EnterpriseAdminListGlobalWebhooksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public EnterpriseAdminListGlobalWebhooksResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminListGlobalWebhooksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GlobalHook[] globalHooks;
    public EnterpriseAdminListGlobalWebhooksResponse withGlobalHooks(openapisdk.models.shared.GlobalHook[] globalHooks) {
        this.globalHooks = globalHooks;
        return this;
    }
}