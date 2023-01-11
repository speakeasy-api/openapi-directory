package openapisdk.models.operations;



public class PostModifyUsageLimitResponse {
    public byte[] body;
    public PostModifyUsageLimitResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostModifyUsageLimitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostModifyUsageLimitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}