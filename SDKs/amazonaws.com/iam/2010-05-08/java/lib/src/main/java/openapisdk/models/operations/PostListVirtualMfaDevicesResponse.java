package openapisdk.models.operations;



public class PostListVirtualMfaDevicesResponse {
    public byte[] body;
    public PostListVirtualMfaDevicesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostListVirtualMfaDevicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostListVirtualMfaDevicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}