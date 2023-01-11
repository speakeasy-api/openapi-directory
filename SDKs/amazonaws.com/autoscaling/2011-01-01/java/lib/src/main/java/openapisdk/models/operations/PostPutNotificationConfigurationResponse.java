package openapisdk.models.operations;



public class PostPutNotificationConfigurationResponse {
    public byte[] body;
    public PostPutNotificationConfigurationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostPutNotificationConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostPutNotificationConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}