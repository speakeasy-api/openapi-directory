package openapisdk.models.operations;



public class PostRegisterImageResponse {
    public byte[] body;
    public PostRegisterImageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostRegisterImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRegisterImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}