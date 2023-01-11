package openapisdk.models.operations;



public class GetBatchStopUpdateActionResponse {
    public byte[] body;
    public GetBatchStopUpdateActionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetBatchStopUpdateActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBatchStopUpdateActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}