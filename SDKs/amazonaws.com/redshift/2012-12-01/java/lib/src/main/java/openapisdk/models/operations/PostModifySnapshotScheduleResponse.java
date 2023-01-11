package openapisdk.models.operations;



public class PostModifySnapshotScheduleResponse {
    public byte[] body;
    public PostModifySnapshotScheduleResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostModifySnapshotScheduleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostModifySnapshotScheduleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}