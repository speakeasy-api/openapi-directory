package openapisdk.models.operations;



public class GetUsersSelectedUserHooksResponse {
    public String contentType;
    public GetUsersSelectedUserHooksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUsersSelectedUserHooksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetUsersSelectedUserHooksResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedWebhookSubscriptions paginatedWebhookSubscriptions;
    public GetUsersSelectedUserHooksResponse withPaginatedWebhookSubscriptions(openapisdk.models.shared.PaginatedWebhookSubscriptions paginatedWebhookSubscriptions) {
        this.paginatedWebhookSubscriptions = paginatedWebhookSubscriptions;
        return this;
    }
}