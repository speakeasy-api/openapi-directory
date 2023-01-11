package openapisdk.models.operations;



public class GetGetSessionTokenResponse {
    public byte[] body;
    public GetGetSessionTokenResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetGetSessionTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGetSessionTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}