package openapisdk.models.operations;



public class PostTerminateEnvironmentResponse {
    public byte[] body;
    public PostTerminateEnvironmentResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostTerminateEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostTerminateEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}