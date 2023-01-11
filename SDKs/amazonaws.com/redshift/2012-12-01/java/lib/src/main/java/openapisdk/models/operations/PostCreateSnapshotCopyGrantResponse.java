package openapisdk.models.operations;



public class PostCreateSnapshotCopyGrantResponse {
    public byte[] body;
    public PostCreateSnapshotCopyGrantResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateSnapshotCopyGrantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateSnapshotCopyGrantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}