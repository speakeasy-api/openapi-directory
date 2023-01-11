package openapisdk.models.operations;



public class PostGetAccessKeyLastUsedResponse {
    public byte[] body;
    public PostGetAccessKeyLastUsedResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGetAccessKeyLastUsedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGetAccessKeyLastUsedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}