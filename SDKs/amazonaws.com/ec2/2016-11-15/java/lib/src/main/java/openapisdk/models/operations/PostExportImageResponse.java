package openapisdk.models.operations;



public class PostExportImageResponse {
    public byte[] body;
    public PostExportImageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostExportImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostExportImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}