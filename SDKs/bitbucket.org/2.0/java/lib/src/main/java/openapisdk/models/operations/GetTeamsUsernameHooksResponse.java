package openapisdk.models.operations;



public class GetTeamsUsernameHooksResponse {
    public String contentType;
    public GetTeamsUsernameHooksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTeamsUsernameHooksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetTeamsUsernameHooksResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedWebhookSubscriptions paginatedWebhookSubscriptions;
    public GetTeamsUsernameHooksResponse withPaginatedWebhookSubscriptions(openapisdk.models.shared.PaginatedWebhookSubscriptions paginatedWebhookSubscriptions) {
        this.paginatedWebhookSubscriptions = paginatedWebhookSubscriptions;
        return this;
    }
}