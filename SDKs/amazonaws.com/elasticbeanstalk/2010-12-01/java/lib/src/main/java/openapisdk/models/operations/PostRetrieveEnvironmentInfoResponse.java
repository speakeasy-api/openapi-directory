package openapisdk.models.operations;



public class PostRetrieveEnvironmentInfoResponse {
    public byte[] body;
    public PostRetrieveEnvironmentInfoResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostRetrieveEnvironmentInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRetrieveEnvironmentInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}