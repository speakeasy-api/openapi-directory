package openapisdk.models.operations;



public class PostGetCallerIdentityResponse {
    public byte[] body;
    public PostGetCallerIdentityResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGetCallerIdentityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGetCallerIdentityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}