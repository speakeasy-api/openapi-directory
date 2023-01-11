package openapisdk.models.operations;



public class PostRebuildEnvironmentResponse {
    public byte[] body;
    public PostRebuildEnvironmentResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostRebuildEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRebuildEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}