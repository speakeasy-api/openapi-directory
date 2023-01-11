package openapisdk.models.operations;



public class SendTaskHeartbeatResponse {
    public String contentType;
    public SendTaskHeartbeatResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidToken;
    public SendTaskHeartbeatResponse withInvalidToken(Object invalidToken) {
        this.invalidToken = invalidToken;
        return this;
    }
    public java.util.Map<String, Object> sendTaskHeartbeatOutput;
    public SendTaskHeartbeatResponse withSendTaskHeartbeatOutput(java.util.Map<String, Object> sendTaskHeartbeatOutput) {
        this.sendTaskHeartbeatOutput = sendTaskHeartbeatOutput;
        return this;
    }
    public Long statusCode;
    public SendTaskHeartbeatResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object taskDoesNotExist;
    public SendTaskHeartbeatResponse withTaskDoesNotExist(Object taskDoesNotExist) {
        this.taskDoesNotExist = taskDoesNotExist;
        return this;
    }
    public Object taskTimedOut;
    public SendTaskHeartbeatResponse withTaskTimedOut(Object taskTimedOut) {
        this.taskTimedOut = taskTimedOut;
        return this;
    }
}