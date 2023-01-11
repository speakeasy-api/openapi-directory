package openapisdk.models.operations;



public class PostAuthorizeSnapshotAccessResponse {
    public byte[] body;
    public PostAuthorizeSnapshotAccessResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostAuthorizeSnapshotAccessResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAuthorizeSnapshotAccessResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}