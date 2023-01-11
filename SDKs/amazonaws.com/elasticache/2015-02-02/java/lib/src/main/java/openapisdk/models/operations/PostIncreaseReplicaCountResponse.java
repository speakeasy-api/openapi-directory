package openapisdk.models.operations;



public class PostIncreaseReplicaCountResponse {
    public byte[] body;
    public PostIncreaseReplicaCountResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostIncreaseReplicaCountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostIncreaseReplicaCountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}