package openapisdk.models.operations;



public class PostRegisterTargetsResponse {
    public byte[] body;
    public PostRegisterTargetsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostRegisterTargetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRegisterTargetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}