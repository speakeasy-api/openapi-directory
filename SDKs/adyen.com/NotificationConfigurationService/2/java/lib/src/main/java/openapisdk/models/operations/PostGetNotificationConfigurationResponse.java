package openapisdk.models.operations;



public class PostGetNotificationConfigurationResponse {
    public String contentType;
    public PostGetNotificationConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object getNotificationConfigurationResponse;
    public PostGetNotificationConfigurationResponse withGetNotificationConfigurationResponse(Object getNotificationConfigurationResponse) {
        this.getNotificationConfigurationResponse = getNotificationConfigurationResponse;
        return this;
    }
    public Object serviceError;
    public PostGetNotificationConfigurationResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostGetNotificationConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}