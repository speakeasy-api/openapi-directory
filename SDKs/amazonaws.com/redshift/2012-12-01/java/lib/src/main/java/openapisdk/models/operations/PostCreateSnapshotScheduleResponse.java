package openapisdk.models.operations;



public class PostCreateSnapshotScheduleResponse {
    public byte[] body;
    public PostCreateSnapshotScheduleResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateSnapshotScheduleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateSnapshotScheduleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}