package openapisdk.models.operations;



public class GetBatchApplyUpdateActionResponse {
    public byte[] body;
    public GetBatchApplyUpdateActionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetBatchApplyUpdateActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBatchApplyUpdateActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}