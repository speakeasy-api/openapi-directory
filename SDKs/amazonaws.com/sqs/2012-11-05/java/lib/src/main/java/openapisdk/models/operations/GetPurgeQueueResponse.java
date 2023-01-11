package openapisdk.models.operations;



public class GetPurgeQueueResponse {
    public byte[] body;
    public GetPurgeQueueResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetPurgeQueueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPurgeQueueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}