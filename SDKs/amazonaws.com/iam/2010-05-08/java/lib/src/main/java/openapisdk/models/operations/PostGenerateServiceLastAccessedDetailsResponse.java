package openapisdk.models.operations;



public class PostGenerateServiceLastAccessedDetailsResponse {
    public byte[] body;
    public PostGenerateServiceLastAccessedDetailsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGenerateServiceLastAccessedDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGenerateServiceLastAccessedDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}