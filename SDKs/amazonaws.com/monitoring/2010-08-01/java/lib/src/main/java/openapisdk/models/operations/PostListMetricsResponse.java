package openapisdk.models.operations;



public class PostListMetricsResponse {
    public byte[] body;
    public PostListMetricsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostListMetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostListMetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}