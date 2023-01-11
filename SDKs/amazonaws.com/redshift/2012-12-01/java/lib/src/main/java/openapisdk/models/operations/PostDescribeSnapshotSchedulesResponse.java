package openapisdk.models.operations;



public class PostDescribeSnapshotSchedulesResponse {
    public byte[] body;
    public PostDescribeSnapshotSchedulesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeSnapshotSchedulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeSnapshotSchedulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}