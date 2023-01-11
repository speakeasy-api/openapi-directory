package openapisdk.models.operations;



public class PostGetServiceLastAccessedDetailsResponse {
    public byte[] body;
    public PostGetServiceLastAccessedDetailsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGetServiceLastAccessedDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGetServiceLastAccessedDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}