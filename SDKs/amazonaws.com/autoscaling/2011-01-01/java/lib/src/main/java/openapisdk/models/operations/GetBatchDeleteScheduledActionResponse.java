package openapisdk.models.operations;



public class GetBatchDeleteScheduledActionResponse {
    public byte[] body;
    public GetBatchDeleteScheduledActionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetBatchDeleteScheduledActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBatchDeleteScheduledActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}