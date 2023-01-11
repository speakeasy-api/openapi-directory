package openapisdk.models.operations;



public class PostChangePasswordResponse {
    public byte[] body;
    public PostChangePasswordResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostChangePasswordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostChangePasswordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}