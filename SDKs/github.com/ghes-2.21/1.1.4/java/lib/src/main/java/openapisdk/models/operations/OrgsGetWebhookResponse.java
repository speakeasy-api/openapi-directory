package openapisdk.models.operations;



public class OrgsGetWebhookResponse {
    public String contentType;
    public OrgsGetWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OrgsGetWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public OrgsGetWebhookResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.OrgHook orgHook;
    public OrgsGetWebhookResponse withOrgHook(openapisdk.models.shared.OrgHook orgHook) {
        this.orgHook = orgHook;
        return this;
    }
}