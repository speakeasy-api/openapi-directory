package openapisdk.models.operations;



public class PostDeleteApplicationVersionResponse {
    public byte[] body;
    public PostDeleteApplicationVersionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeleteApplicationVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeleteApplicationVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}