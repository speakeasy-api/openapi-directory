package openapisdk.models.operations;



public class GetRevokeSnapshotAccessResponse {
    public byte[] body;
    public GetRevokeSnapshotAccessResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetRevokeSnapshotAccessResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRevokeSnapshotAccessResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}