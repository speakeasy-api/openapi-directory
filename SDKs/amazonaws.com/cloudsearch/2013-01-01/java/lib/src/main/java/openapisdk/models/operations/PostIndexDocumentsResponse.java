package openapisdk.models.operations;



public class PostIndexDocumentsResponse {
    public byte[] body;
    public PostIndexDocumentsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostIndexDocumentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostIndexDocumentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}