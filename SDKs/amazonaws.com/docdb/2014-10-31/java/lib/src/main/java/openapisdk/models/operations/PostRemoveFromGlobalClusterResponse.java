package openapisdk.models.operations;



public class PostRemoveFromGlobalClusterResponse {
    public byte[] body;
    public PostRemoveFromGlobalClusterResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostRemoveFromGlobalClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRemoveFromGlobalClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}