package openapisdk.models.operations;



public class PostImportImageResponse {
    public byte[] body;
    public PostImportImageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostImportImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostImportImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}