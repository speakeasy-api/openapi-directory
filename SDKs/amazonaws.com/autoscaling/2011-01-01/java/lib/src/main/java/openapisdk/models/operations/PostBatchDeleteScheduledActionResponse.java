package openapisdk.models.operations;



public class PostBatchDeleteScheduledActionResponse {
    public byte[] body;
    public PostBatchDeleteScheduledActionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostBatchDeleteScheduledActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostBatchDeleteScheduledActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}