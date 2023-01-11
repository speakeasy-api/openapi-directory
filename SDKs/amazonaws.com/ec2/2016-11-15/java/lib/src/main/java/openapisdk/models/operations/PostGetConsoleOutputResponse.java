package openapisdk.models.operations;



public class PostGetConsoleOutputResponse {
    public byte[] body;
    public PostGetConsoleOutputResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGetConsoleOutputResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGetConsoleOutputResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}