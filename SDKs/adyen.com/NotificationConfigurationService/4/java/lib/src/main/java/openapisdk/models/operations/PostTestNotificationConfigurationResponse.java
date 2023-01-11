package openapisdk.models.operations;



public class PostTestNotificationConfigurationResponse {
    public String contentType;
    public PostTestNotificationConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object serviceError;
    public PostTestNotificationConfigurationResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostTestNotificationConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object testNotificationConfigurationResponse;
    public PostTestNotificationConfigurationResponse withTestNotificationConfigurationResponse(Object testNotificationConfigurationResponse) {
        this.testNotificationConfigurationResponse = testNotificationConfigurationResponse;
        return this;
    }
}