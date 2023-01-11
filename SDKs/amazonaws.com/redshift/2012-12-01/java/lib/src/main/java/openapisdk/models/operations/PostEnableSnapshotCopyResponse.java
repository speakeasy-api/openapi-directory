package openapisdk.models.operations;



public class PostEnableSnapshotCopyResponse {
    public byte[] body;
    public PostEnableSnapshotCopyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostEnableSnapshotCopyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostEnableSnapshotCopyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}