package openapisdk.models.operations;



public class PostGetAccountSummaryResponse {
    public byte[] body;
    public PostGetAccountSummaryResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGetAccountSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGetAccountSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}