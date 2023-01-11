package openapisdk.models.operations;



public class PostDescribeSnapshotsResponse {
    public byte[] body;
    public PostDescribeSnapshotsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeSnapshotsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeSnapshotsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}