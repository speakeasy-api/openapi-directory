package openapisdk.models.operations;



public class GetRestoreTableFromClusterSnapshotResponse {
    public byte[] body;
    public GetRestoreTableFromClusterSnapshotResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetRestoreTableFromClusterSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRestoreTableFromClusterSnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}