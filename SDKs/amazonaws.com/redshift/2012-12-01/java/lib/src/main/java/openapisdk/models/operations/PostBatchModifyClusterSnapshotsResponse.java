package openapisdk.models.operations;



public class PostBatchModifyClusterSnapshotsResponse {
    public byte[] body;
    public PostBatchModifyClusterSnapshotsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostBatchModifyClusterSnapshotsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostBatchModifyClusterSnapshotsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}