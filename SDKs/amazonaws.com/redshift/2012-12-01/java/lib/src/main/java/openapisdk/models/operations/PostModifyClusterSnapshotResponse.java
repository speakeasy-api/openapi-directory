package openapisdk.models.operations;



public class PostModifyClusterSnapshotResponse {
    public byte[] body;
    public PostModifyClusterSnapshotResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostModifyClusterSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostModifyClusterSnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}