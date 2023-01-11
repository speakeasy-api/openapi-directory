package openapisdk.models.operations;



public class PostDeleteSuggesterResponse {
    public byte[] body;
    public PostDeleteSuggesterResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeleteSuggesterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeleteSuggesterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}