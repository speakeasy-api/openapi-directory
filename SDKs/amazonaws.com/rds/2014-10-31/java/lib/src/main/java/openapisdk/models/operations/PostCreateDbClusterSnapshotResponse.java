package openapisdk.models.operations;



public class PostCreateDbClusterSnapshotResponse {
    public byte[] body;
    public PostCreateDbClusterSnapshotResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateDbClusterSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateDbClusterSnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}