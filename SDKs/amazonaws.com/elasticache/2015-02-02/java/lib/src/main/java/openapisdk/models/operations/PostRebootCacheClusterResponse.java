package openapisdk.models.operations;



public class PostRebootCacheClusterResponse {
    public byte[] body;
    public PostRebootCacheClusterResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostRebootCacheClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRebootCacheClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}