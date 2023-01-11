package openapisdk.models.operations;



public class GetCancelJobResponse {
    public byte[] body;
    public GetCancelJobResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetCancelJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCancelJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}