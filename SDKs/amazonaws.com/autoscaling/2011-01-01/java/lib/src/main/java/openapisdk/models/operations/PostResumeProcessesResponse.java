package openapisdk.models.operations;



public class PostResumeProcessesResponse {
    public byte[] body;
    public PostResumeProcessesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostResumeProcessesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostResumeProcessesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}