package openapisdk.models.operations;



public class GetAuthorizeSnapshotAccessResponse {
    public byte[] body;
    public GetAuthorizeSnapshotAccessResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetAuthorizeSnapshotAccessResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAuthorizeSnapshotAccessResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}