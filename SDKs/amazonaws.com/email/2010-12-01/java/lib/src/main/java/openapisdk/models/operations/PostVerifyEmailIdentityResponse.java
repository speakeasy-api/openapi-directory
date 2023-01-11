package openapisdk.models.operations;



public class PostVerifyEmailIdentityResponse {
    public byte[] body;
    public PostVerifyEmailIdentityResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostVerifyEmailIdentityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostVerifyEmailIdentityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}