package openapisdk.models.operations;



public class PostListMfaDevicesResponse {
    public byte[] body;
    public PostListMfaDevicesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostListMfaDevicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostListMfaDevicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}