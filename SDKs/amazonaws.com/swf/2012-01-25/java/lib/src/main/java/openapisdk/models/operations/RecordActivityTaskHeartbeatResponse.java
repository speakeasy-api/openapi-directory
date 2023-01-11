package openapisdk.models.operations;



public class RecordActivityTaskHeartbeatResponse {
    public openapisdk.models.shared.ActivityTaskStatus activityTaskStatus;
    public RecordActivityTaskHeartbeatResponse withActivityTaskStatus(openapisdk.models.shared.ActivityTaskStatus activityTaskStatus) {
        this.activityTaskStatus = activityTaskStatus;
        return this;
    }
    public String contentType;
    public RecordActivityTaskHeartbeatResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object operationNotPermittedFault;
    public RecordActivityTaskHeartbeatResponse withOperationNotPermittedFault(Object operationNotPermittedFault) {
        this.operationNotPermittedFault = operationNotPermittedFault;
        return this;
    }
    public Long statusCode;
    public RecordActivityTaskHeartbeatResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceFault;
    public RecordActivityTaskHeartbeatResponse withUnknownResourceFault(Object unknownResourceFault) {
        this.unknownResourceFault = unknownResourceFault;
        return this;
    }
}