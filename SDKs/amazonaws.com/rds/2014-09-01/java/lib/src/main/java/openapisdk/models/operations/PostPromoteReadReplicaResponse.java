package openapisdk.models.operations;



public class PostPromoteReadReplicaResponse {
    public byte[] body;
    public PostPromoteReadReplicaResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostPromoteReadReplicaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostPromoteReadReplicaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}