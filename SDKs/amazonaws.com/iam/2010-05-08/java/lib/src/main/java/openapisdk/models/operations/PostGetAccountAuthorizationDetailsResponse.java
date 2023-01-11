package openapisdk.models.operations;



public class PostGetAccountAuthorizationDetailsResponse {
    public byte[] body;
    public PostGetAccountAuthorizationDetailsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGetAccountAuthorizationDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGetAccountAuthorizationDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}