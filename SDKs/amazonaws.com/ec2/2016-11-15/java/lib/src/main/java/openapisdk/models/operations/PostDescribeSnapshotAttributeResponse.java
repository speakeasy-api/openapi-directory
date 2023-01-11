package openapisdk.models.operations;



public class PostDescribeSnapshotAttributeResponse {
    public byte[] body;
    public PostDescribeSnapshotAttributeResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeSnapshotAttributeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeSnapshotAttributeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}