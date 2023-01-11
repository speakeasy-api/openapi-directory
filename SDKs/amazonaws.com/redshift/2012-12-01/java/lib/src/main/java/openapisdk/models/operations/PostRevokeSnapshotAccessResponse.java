package openapisdk.models.operations;



public class PostRevokeSnapshotAccessResponse {
    public byte[] body;
    public PostRevokeSnapshotAccessResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostRevokeSnapshotAccessResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRevokeSnapshotAccessResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}