package openapisdk.models.operations;



public class PostCompleteLifecycleActionResponse {
    public byte[] body;
    public PostCompleteLifecycleActionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCompleteLifecycleActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCompleteLifecycleActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}