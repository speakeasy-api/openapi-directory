package openapisdk.models.operations;



public class PostBatchStopUpdateActionResponse {
    public byte[] body;
    public PostBatchStopUpdateActionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostBatchStopUpdateActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostBatchStopUpdateActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}