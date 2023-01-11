package openapisdk.models.operations;



public class PostSelectResponse {
    public byte[] body;
    public PostSelectResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostSelectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostSelectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}