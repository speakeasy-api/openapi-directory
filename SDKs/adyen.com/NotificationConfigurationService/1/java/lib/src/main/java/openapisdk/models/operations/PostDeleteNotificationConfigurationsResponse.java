package openapisdk.models.operations;



public class PostDeleteNotificationConfigurationsResponse {
    public String contentType;
    public PostDeleteNotificationConfigurationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object genericResponse;
    public PostDeleteNotificationConfigurationsResponse withGenericResponse(Object genericResponse) {
        this.genericResponse = genericResponse;
        return this;
    }
    public Object serviceError;
    public PostDeleteNotificationConfigurationsResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostDeleteNotificationConfigurationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}