package openapisdk.models.operations;



public class ActivityListRepoNotificationsForAuthenticatedUserResponse {
    public String contentType;
    public ActivityListRepoNotificationsForAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ActivityListRepoNotificationsForAuthenticatedUserResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ActivityListRepoNotificationsForAuthenticatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Thread[] threads;
    public ActivityListRepoNotificationsForAuthenticatedUserResponse withThreads(openapisdk.models.shared.Thread[] threads) {
        this.threads = threads;
        return this;
    }
}