package openapisdk.models.operations;



public class PostDeleteSnapshotCopyGrantResponse {
    public byte[] body;
    public PostDeleteSnapshotCopyGrantResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeleteSnapshotCopyGrantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeleteSnapshotCopyGrantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}