package openapisdk.models.operations;



public class PostFailoverGlobalClusterResponse {
    public byte[] body;
    public PostFailoverGlobalClusterResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostFailoverGlobalClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostFailoverGlobalClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}