package openapisdk.models.operations;



public class PostResumeClusterResponse {
    public byte[] body;
    public PostResumeClusterResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostResumeClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostResumeClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}