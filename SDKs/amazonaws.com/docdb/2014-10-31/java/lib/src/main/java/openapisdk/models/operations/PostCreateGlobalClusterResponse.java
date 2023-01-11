package openapisdk.models.operations;



public class PostCreateGlobalClusterResponse {
    public byte[] body;
    public PostCreateGlobalClusterResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateGlobalClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateGlobalClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}