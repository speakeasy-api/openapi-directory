package openapisdk.models.operations;



public class PostDisableSnapshotCopyResponse {
    public byte[] body;
    public PostDisableSnapshotCopyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDisableSnapshotCopyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDisableSnapshotCopyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}