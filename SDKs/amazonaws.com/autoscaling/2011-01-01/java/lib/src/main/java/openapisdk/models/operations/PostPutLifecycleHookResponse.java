package openapisdk.models.operations;



public class PostPutLifecycleHookResponse {
    public byte[] body;
    public PostPutLifecycleHookResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostPutLifecycleHookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostPutLifecycleHookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}