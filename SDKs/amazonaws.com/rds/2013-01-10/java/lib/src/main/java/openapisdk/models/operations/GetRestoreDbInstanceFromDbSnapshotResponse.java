package openapisdk.models.operations;



public class GetRestoreDbInstanceFromDbSnapshotResponse {
    public byte[] body;
    public GetRestoreDbInstanceFromDbSnapshotResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetRestoreDbInstanceFromDbSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRestoreDbInstanceFromDbSnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}