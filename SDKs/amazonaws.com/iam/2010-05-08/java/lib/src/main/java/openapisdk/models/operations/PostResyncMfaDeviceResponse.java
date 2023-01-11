package openapisdk.models.operations;



public class PostResyncMfaDeviceResponse {
    public byte[] body;
    public PostResyncMfaDeviceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostResyncMfaDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostResyncMfaDeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}