package openapisdk.models.operations;



public class GetCreateAccessKeyResponse {
    public byte[] body;
    public GetCreateAccessKeyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetCreateAccessKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCreateAccessKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}