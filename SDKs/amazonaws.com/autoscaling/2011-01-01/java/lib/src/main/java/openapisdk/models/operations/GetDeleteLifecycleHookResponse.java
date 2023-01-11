package openapisdk.models.operations;



public class GetDeleteLifecycleHookResponse {
    public byte[] body;
    public GetDeleteLifecycleHookResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDeleteLifecycleHookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeleteLifecycleHookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}