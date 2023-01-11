package openapisdk.models.operations;



public class PostRecordLifecycleActionHeartbeatResponse {
    public byte[] body;
    public PostRecordLifecycleActionHeartbeatResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostRecordLifecycleActionHeartbeatResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRecordLifecycleActionHeartbeatResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}