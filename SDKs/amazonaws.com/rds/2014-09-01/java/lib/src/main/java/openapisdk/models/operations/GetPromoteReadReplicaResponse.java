package openapisdk.models.operations;



public class GetPromoteReadReplicaResponse {
    public byte[] body;
    public GetPromoteReadReplicaResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetPromoteReadReplicaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPromoteReadReplicaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}