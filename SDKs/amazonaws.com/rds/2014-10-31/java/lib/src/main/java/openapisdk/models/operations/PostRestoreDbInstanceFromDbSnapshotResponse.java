package openapisdk.models.operations;



public class PostRestoreDbInstanceFromDbSnapshotResponse {
    public byte[] body;
    public PostRestoreDbInstanceFromDbSnapshotResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostRestoreDbInstanceFromDbSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRestoreDbInstanceFromDbSnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}