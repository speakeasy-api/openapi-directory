package openapisdk.models.operations;



public class PostModifyAuthenticationProfileResponse {
    public byte[] body;
    public PostModifyAuthenticationProfileResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostModifyAuthenticationProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostModifyAuthenticationProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}