package openapisdk.models.operations;



public class PostCreateListenerResponse {
    public byte[] body;
    public PostCreateListenerResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateListenerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateListenerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}