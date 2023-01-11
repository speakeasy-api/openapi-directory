package openapisdk.models.operations;



public class PostDefineSuggesterResponse {
    public byte[] body;
    public PostDefineSuggesterResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDefineSuggesterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDefineSuggesterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}