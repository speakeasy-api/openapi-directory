package openapisdk.models.operations;



public class GetPutNotificationConfigurationResponse {
    public byte[] body;
    public GetPutNotificationConfigurationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetPutNotificationConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPutNotificationConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}