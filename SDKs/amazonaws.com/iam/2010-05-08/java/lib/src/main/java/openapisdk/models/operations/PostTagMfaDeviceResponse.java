package openapisdk.models.operations;



public class PostTagMfaDeviceResponse {
    public byte[] body;
    public PostTagMfaDeviceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostTagMfaDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostTagMfaDeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}