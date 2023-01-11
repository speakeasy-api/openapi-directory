package openapisdk.models.operations;



public class PostStartDbClusterResponse {
    public byte[] body;
    public PostStartDbClusterResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostStartDbClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostStartDbClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}