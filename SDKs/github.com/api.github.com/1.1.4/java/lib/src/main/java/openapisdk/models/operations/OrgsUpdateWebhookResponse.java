package openapisdk.models.operations;



public class OrgsUpdateWebhookResponse {
    public String contentType;
    public OrgsUpdateWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OrgsUpdateWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public OrgsUpdateWebhookResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.OrgHook orgHook;
    public OrgsUpdateWebhookResponse withOrgHook(openapisdk.models.shared.OrgHook orgHook) {
        this.orgHook = orgHook;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public OrgsUpdateWebhookResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}