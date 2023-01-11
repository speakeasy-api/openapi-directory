package openapisdk.models.operations;



public class EnterpriseAdminUpdateGlobalWebhookResponse {
    public String contentType;
    public EnterpriseAdminUpdateGlobalWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminUpdateGlobalWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GlobalHook2 globalHook2;
    public EnterpriseAdminUpdateGlobalWebhookResponse withGlobalHook2(openapisdk.models.shared.GlobalHook2 globalHook2) {
        this.globalHook2 = globalHook2;
        return this;
    }
}