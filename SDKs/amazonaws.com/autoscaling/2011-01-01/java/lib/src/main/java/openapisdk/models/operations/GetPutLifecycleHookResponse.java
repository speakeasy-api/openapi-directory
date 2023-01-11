package openapisdk.models.operations;



public class GetPutLifecycleHookResponse {
    public byte[] body;
    public GetPutLifecycleHookResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetPutLifecycleHookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPutLifecycleHookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}