package openapisdk.models.operations;



public class GetDeleteUsageLimitResponse {
    public byte[] body;
    public GetDeleteUsageLimitResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDeleteUsageLimitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeleteUsageLimitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}