package openapisdk.models.operations;



public class PostDeleteEventSubscriptionResponse {
    public byte[] body;
    public PostDeleteEventSubscriptionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeleteEventSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeleteEventSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}