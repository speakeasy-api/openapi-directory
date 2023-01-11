package openapisdk.models.operations;



public class PostDecreaseReplicaCountResponse {
    public byte[] body;
    public PostDecreaseReplicaCountResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDecreaseReplicaCountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDecreaseReplicaCountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}