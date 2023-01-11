package openapisdk.models.operations;



public class PutUsersSelectedUserHooksUidResponse {
    public String contentType;
    public PutUsersSelectedUserHooksUidResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutUsersSelectedUserHooksUidResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PutUsersSelectedUserHooksUidResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> webhookSubscription;
    public PutUsersSelectedUserHooksUidResponse withWebhookSubscription(java.util.Map<String, Object> webhookSubscription) {
        this.webhookSubscription = webhookSubscription;
        return this;
    }
}