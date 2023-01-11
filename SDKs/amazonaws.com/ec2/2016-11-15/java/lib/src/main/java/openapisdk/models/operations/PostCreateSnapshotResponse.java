package openapisdk.models.operations;



public class PostCreateSnapshotResponse {
    public byte[] body;
    public PostCreateSnapshotResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateSnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}