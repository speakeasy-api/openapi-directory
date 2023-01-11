package openapisdk.models.operations;



public class PostGetConsoleScreenshotResponse {
    public byte[] body;
    public PostGetConsoleScreenshotResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGetConsoleScreenshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGetConsoleScreenshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}