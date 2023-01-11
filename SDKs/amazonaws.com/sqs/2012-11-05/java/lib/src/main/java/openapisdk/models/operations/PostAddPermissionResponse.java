package openapisdk.models.operations;



public class PostAddPermissionResponse {
    public byte[] body;
    public PostAddPermissionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostAddPermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAddPermissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}