package openapisdk.models.operations;



public class PostReceiveMessageResponse {
    public byte[] body;
    public PostReceiveMessageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostReceiveMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostReceiveMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}