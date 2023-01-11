package openapisdk.models.operations;



public class PostDeleteLifecycleHookResponse {
    public byte[] body;
    public PostDeleteLifecycleHookResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeleteLifecycleHookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeleteLifecycleHookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}