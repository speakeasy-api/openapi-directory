package openapisdk.models.operations;



public class PostConfigureHealthCheckResponse {
    public byte[] body;
    public PostConfigureHealthCheckResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostConfigureHealthCheckResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostConfigureHealthCheckResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}