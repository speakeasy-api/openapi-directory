package openapisdk.models.operations;



public class ActivityListNotificationsForAuthenticatedUserResponse {
    public String contentType;
    public ActivityListNotificationsForAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ActivityListNotificationsForAuthenticatedUserResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ActivityListNotificationsForAuthenticatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ActivityListNotificationsForAuthenticatedUserResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Thread[] threads;
    public ActivityListNotificationsForAuthenticatedUserResponse withThreads(openapisdk.models.shared.Thread[] threads) {
        this.threads = threads;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ActivityListNotificationsForAuthenticatedUserResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}