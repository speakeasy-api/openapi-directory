package openapisdk.models.operations;



public class PostRestoreTableFromClusterSnapshotResponse {
    public byte[] body;
    public PostRestoreTableFromClusterSnapshotResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostRestoreTableFromClusterSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRestoreTableFromClusterSnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}