package openapisdk.models.operations;



public class OrgsCreateWebhookResponse {
    public String contentType;
    public OrgsCreateWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public OrgsCreateWebhookResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public OrgsCreateWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public OrgsCreateWebhookResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.OrgHook orgHook;
    public OrgsCreateWebhookResponse withOrgHook(openapisdk.models.shared.OrgHook orgHook) {
        this.orgHook = orgHook;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public OrgsCreateWebhookResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}