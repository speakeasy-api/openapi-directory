package openapisdk.models.operations;



public class PostCreateUsageLimitResponse {
    public byte[] body;
    public PostCreateUsageLimitResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateUsageLimitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateUsageLimitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}