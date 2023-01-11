package openapisdk.models.operations;



public class EnterpriseAdminCreateGlobalWebhookResponse {
    public String contentType;
    public EnterpriseAdminCreateGlobalWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminCreateGlobalWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GlobalHook globalHook;
    public EnterpriseAdminCreateGlobalWebhookResponse withGlobalHook(openapisdk.models.shared.GlobalHook globalHook) {
        this.globalHook = globalHook;
        return this;
    }
}