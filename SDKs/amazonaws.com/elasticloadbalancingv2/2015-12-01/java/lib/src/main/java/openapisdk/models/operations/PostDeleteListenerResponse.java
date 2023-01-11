package openapisdk.models.operations;



public class PostDeleteListenerResponse {
    public byte[] body;
    public PostDeleteListenerResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeleteListenerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeleteListenerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}