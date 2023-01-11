package openapisdk.models.operations;



public class PostListJobsResponse {
    public byte[] body;
    public PostListJobsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostListJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostListJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}