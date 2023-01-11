package openapisdk.models.operations;



public class OrgsListWebhooksResponse {
    public String contentType;
    public OrgsListWebhooksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public OrgsListWebhooksResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public OrgsListWebhooksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public OrgsListWebhooksResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.OrgHook[] orgHooks;
    public OrgsListWebhooksResponse withOrgHooks(openapisdk.models.shared.OrgHook[] orgHooks) {
        this.orgHooks = orgHooks;
        return this;
    }
}