package openapisdk.models.operations;



public class PostDeleteUsageLimitResponse {
    public byte[] body;
    public PostDeleteUsageLimitResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeleteUsageLimitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeleteUsageLimitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}