package openapisdk.models.operations;



public class PostBatchDeleteClusterSnapshotsResponse {
    public byte[] body;
    public PostBatchDeleteClusterSnapshotsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostBatchDeleteClusterSnapshotsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostBatchDeleteClusterSnapshotsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}