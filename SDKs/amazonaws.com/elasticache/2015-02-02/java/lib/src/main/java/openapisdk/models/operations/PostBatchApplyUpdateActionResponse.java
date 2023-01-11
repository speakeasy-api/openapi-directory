package openapisdk.models.operations;



public class PostBatchApplyUpdateActionResponse {
    public byte[] body;
    public PostBatchApplyUpdateActionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostBatchApplyUpdateActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostBatchApplyUpdateActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}