package openapisdk.models.operations;



public class GetCompleteLifecycleActionResponse {
    public byte[] body;
    public GetCompleteLifecycleActionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetCompleteLifecycleActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCompleteLifecycleActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}