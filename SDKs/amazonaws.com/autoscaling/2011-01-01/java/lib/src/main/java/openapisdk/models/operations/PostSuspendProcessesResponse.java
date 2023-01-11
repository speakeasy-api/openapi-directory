package openapisdk.models.operations;



public class PostSuspendProcessesResponse {
    public byte[] body;
    public PostSuspendProcessesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostSuspendProcessesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostSuspendProcessesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}