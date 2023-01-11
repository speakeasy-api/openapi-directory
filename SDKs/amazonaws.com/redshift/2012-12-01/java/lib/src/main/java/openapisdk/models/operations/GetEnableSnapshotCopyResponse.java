package openapisdk.models.operations;



public class GetEnableSnapshotCopyResponse {
    public byte[] body;
    public GetEnableSnapshotCopyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetEnableSnapshotCopyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEnableSnapshotCopyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}