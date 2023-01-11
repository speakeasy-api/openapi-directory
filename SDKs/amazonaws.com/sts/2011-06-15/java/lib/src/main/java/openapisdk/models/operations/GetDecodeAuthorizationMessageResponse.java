package openapisdk.models.operations;



public class GetDecodeAuthorizationMessageResponse {
    public byte[] body;
    public GetDecodeAuthorizationMessageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDecodeAuthorizationMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDecodeAuthorizationMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}