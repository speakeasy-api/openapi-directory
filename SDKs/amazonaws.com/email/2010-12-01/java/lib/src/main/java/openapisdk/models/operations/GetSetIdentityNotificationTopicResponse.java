package openapisdk.models.operations;



public class GetSetIdentityNotificationTopicResponse {
    public byte[] body;
    public GetSetIdentityNotificationTopicResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetSetIdentityNotificationTopicResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSetIdentityNotificationTopicResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}