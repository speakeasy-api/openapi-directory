package openapisdk.models.operations;



public class PostStopDbClusterResponse {
    public byte[] body;
    public PostStopDbClusterResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostStopDbClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostStopDbClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}