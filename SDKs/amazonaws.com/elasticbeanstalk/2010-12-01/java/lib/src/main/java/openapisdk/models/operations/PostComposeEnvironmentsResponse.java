package openapisdk.models.operations;



public class PostComposeEnvironmentsResponse {
    public byte[] body;
    public PostComposeEnvironmentsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostComposeEnvironmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostComposeEnvironmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}