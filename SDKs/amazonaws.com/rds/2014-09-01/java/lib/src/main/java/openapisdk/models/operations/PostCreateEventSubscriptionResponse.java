package openapisdk.models.operations;



public class PostCreateEventSubscriptionResponse {
    public byte[] body;
    public PostCreateEventSubscriptionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateEventSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateEventSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}