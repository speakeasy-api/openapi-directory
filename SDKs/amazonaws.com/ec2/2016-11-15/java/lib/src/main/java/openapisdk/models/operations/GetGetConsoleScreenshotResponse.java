package openapisdk.models.operations;



public class GetGetConsoleScreenshotResponse {
    public byte[] body;
    public GetGetConsoleScreenshotResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetGetConsoleScreenshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGetConsoleScreenshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}