package openapisdk.models.operations;



public class PostUpdateNotificationConfigurationResponse {
    public String contentType;
    public PostUpdateNotificationConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object getNotificationConfigurationResponse;
    public PostUpdateNotificationConfigurationResponse withGetNotificationConfigurationResponse(Object getNotificationConfigurationResponse) {
        this.getNotificationConfigurationResponse = getNotificationConfigurationResponse;
        return this;
    }
    public Object serviceError;
    public PostUpdateNotificationConfigurationResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostUpdateNotificationConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}