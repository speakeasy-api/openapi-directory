package openapisdk.models.operations;



public class PostModifyDbSnapshotAttributeResponse {
    public byte[] body;
    public PostModifyDbSnapshotAttributeResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostModifyDbSnapshotAttributeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostModifyDbSnapshotAttributeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}