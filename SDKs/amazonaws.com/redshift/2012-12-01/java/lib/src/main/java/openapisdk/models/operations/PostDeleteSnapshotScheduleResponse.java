package openapisdk.models.operations;



public class PostDeleteSnapshotScheduleResponse {
    public byte[] body;
    public PostDeleteSnapshotScheduleResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeleteSnapshotScheduleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeleteSnapshotScheduleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}