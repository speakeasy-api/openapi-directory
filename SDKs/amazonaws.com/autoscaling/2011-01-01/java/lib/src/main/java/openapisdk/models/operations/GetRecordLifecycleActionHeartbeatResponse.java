package openapisdk.models.operations;



public class GetRecordLifecycleActionHeartbeatResponse {
    public byte[] body;
    public GetRecordLifecycleActionHeartbeatResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetRecordLifecycleActionHeartbeatResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRecordLifecycleActionHeartbeatResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}