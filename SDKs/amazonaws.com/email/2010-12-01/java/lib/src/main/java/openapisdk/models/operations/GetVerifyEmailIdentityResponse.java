package openapisdk.models.operations;



public class GetVerifyEmailIdentityResponse {
    public byte[] body;
    public GetVerifyEmailIdentityResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetVerifyEmailIdentityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVerifyEmailIdentityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}