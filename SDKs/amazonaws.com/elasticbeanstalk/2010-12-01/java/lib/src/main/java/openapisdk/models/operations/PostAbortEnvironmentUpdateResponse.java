package openapisdk.models.operations;



public class PostAbortEnvironmentUpdateResponse {
    public byte[] body;
    public PostAbortEnvironmentUpdateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostAbortEnvironmentUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAbortEnvironmentUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}