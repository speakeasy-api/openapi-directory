package openapisdk.models.operations;



public class PostDecodeAuthorizationMessageResponse {
    public byte[] body;
    public PostDecodeAuthorizationMessageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDecodeAuthorizationMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDecodeAuthorizationMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}