package openapisdk.models.operations;



public class GetDescribeDbSnapshotsResponse {
    public byte[] body;
    public GetDescribeDbSnapshotsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDescribeDbSnapshotsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDescribeDbSnapshotsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}